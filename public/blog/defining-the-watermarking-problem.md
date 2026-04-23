In our last two group meetings, Quoc and Minh have presented many diverse watermarking techniques. After each one, we've routinely asked two questions: "can this be broken?", and "if so, how would we improve it?". The first question implicitly grants the adversary unbounded capability — any paraphraser, any API-hiding, any compute budget. I'll call this the **unbounded adversary assumption**. Under it, the answer is always yes.

I believe no watermark is unbreakable under the unbounded adversary assumption, and I'll argue why below. If we keep evaluating under this assumption, I fear the only work we'll end up doing is small iterative improvements on previous watermarking methods, each of which is, at the end of the day, still breakable under the same assumption. Trung suggested something better in the group channel: do for watermarking what [Athalye et al. 2018](https://proceedings.mlr.press/v80/athalye18a/athalye18a.pdf) did for adversarial-example defences — collect the existing techniques, systematically attack them, and show that robustness claims under the unbounded adversary assumption don't hold. This post is my attempt to lay the groundwork for that by pinning down *why* these techniques fail, not just *that* they do.

The argument has three parts: (1) distinguish the two kinds of evidence a defender can have, (2) show why behavioural evidence is structurally doomed under the unbounded adversary assumption, and (3) suggest what we could be asking instead.

## Two kinds of evidence

When a defender wants to attribute a model or its outputs, the evidence they can bring falls into one of two categories. This distinction is what determines whether the defender has any hope.

**Weight-based evidence** relies on inspecting the suspect model's weights, logits, or activations directly. Examples: weight hashes, parameter-space distance to a known base, tokenizer quirks, activation fingerprints on probe inputs, seed-dependent logit biases (the "dislike list" from [SeedPrints](https://arxiv.org/abs/2509.26404)). This evidence requires two things: (1) the defender can access the suspect's weights or logits, and (2) there's a preserved *weight-chain* — the suspect's model was derived from the defender's by a process that keeps weight-space correlations intact (fine-tuning, LoRA, quantisation, merging).

When both conditions hold, **the defender wins**. The signals are overwhelming and independent — a distinctive tokenizer alone is strong evidence of derivation, and stacking architectural quirks, and the dislike list makes evasion essentially impossible without training from scratch. The adversary's only move is to *sever the weight-chain*: distill into a fresh initialisation, train from scratch on the original's outputs, or prune aggressively enough to scramble parameter correlations. Once they do, weight-based evidence disappears — even if the defender still has full weight access.

**Behavioural evidence** relies on input-output pairs alone. Examples: KGW green-token bias in generated text, domain-conditioned output distributions ([Gloaguen](https://arxiv.org/pdf/2505.16723) et al.). This is what the defender is left with when either (a) they can't access the suspect's weights at all, or (b) the adversary severed the weight-chain.

(Fingerprinting — embedding secret trigger-response pairs during training — technically falls under behavioural evidence, since detection still relies on input-output pairs. But the signal lives at the knowledge level rather than in surface form, which changes the game considerably. I'll return to fingerprinting briefly in the final section; for now, the post focuses on watermarks — signals the defender can detect passively from ordinary outputs, without choosing what to query.)

This is where the group's default evaluation lives — and where I'll argue that **"can this be broken?" stops being a meaningful question**, because the answer is always yes via the same simple pipeline, regardless of the technique.

## The core problem: the watermark can't live where the value lives

A watermark that degrades the model's usefulness won't survive deployment — users will just switch to an unwatermarked alternative. So the watermark must be invisible to the user, which means it must live in a part of the output the user doesn't care about.

But what the user cares about *is* the model's value. A strong model is valuable because of the knowledge it encodes — the correctness of its answers, the depth of its analysis, the quality of its reasoning. That knowledge lives at a level of abstraction below the specific tokens the model emits. There are many ways to express the same conclusion; the conclusion is what matters, the phrasing is incidental.

This creates a structural mismatch. The watermark must avoid the knowledge layer (or it degrades utility). So it lives in the surface layer — token choices, phrasing preferences, stylistic patterns. But the surface layer is exactly the part that *doesn't need to be preserved* to capture the model's value. The knowledge can be separated from its surface expression, and the surface can be regenerated independently.

**The watermark lives in the layer the adversary is free to discard.**

![Layers of model output: watermark lives in the dispensable surface layer while value lives in the knowledge core](/blog/watermark_onion.png)

This isn't a flaw in any particular watermarking scheme. It's a property of the problem: the thing that makes the model worth watermarking (its knowledge) and the thing the watermark can safely hide in (its surface form) are at different levels of abstraction. Any adversary who can move between these levels — compressing down to the knowledge and re-expressing it — strips the watermark as a side effect.

### The compression pipeline (one concrete exploitation)

The abstraction gap above can be exploited in a straightforward three-step pipeline:

1. **Extract knowledge from the strong model.** Query it, get its answer. The adversary wants the knowledge — that's the whole point of using the model.
2. **Compress to the knowledge layer.** Paraphrasing is the crudest version. Stronger compressions: summarise, extract key claims, distil reasoning into bullet points, re-encode as a table or code. Each step drops surface-form entropy — and the watermark lives in surface-form entropy.
3. **Regenerate surface from a weak model.** Once you have the core idea, wrapping prose around it is trivial. "Here's the point, now write a paragraph" is a task the weakest open models handle fine. The regenerated text carries the weak model's surface statistics, not the watermarked model's.

This pipeline isn't the only way to exploit the abstraction gap — distillation does it at training scale, and there may be others — but it's the simplest, and it works against *any* watermark that lives in surface form, regardless of the specific technique. It also doesn't require anything close to an "unbounded" adversary: a single API call to the watermarked model plus a commodity open-source model for regeneration is enough. The unbounded adversary assumption isn't what makes the watermark breakable — the structural mismatch does. The assumption just makes it obvious.

The defender can't patch this by making the watermark "more robust" within the surface layer. The problem isn't that the watermark is too fragile — it's that the entire layer it lives in is dispensable. A watermark that *did* survive compression would, by definition, have leaked into the knowledge layer, changing the answer itself. That violates the utility constraint.

## What to ask instead

The compression argument rules out the strong claim — that a behavioural watermark survives any adversary — and the exploit is cheap enough that even a weak bounded adversary can pull it off. But there are three settings where the structural mismatch doesn't apply, and where I think effort can still pay off:

1. **Scenarios where surface form is the asset.** Creative writing, code in a specific style, branded voice — cases where what the adversary wants *is* the surface form. Here compression-and-regenerate destroys the thing they came for, so the pipeline stops being a free attack.
2. **Weight-space watermarks and inherited fingerprints.** This is the category where the defender can actually win. SeedPrints suggests there are stable, training-invariant signals at the weight level that we barely understand.
3. **Fingerprinting rather than watermarking.** Fingerprinting embeds the signal as specific trigger → response pairs, putting it at the *knowledge* level rather than in surface form. The compression pipeline doesn't touch it, because the adversary only compresses knowledge they actually generated, and they don't know the trigger exists so they never generate the response. The attack surface shifts to "does heavy fine-tuning or distillation overwrite the specific trigger-response association?" — a much better-defined game.

In terms of the Athalye-style project Trung suggested, my bet is the conclusion ends up being: **behavioural watermarks are structurally broken, and progress means moving the signal to a layer the adversary can't freely discard.**  I'd love to hear what you agree or disagree with.
