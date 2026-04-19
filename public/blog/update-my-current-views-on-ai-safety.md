It's been two years since my last blog post where I talked about why I was scared about the future of AI.
In that post, I gave an overview of my concerns about why it seemed we were heading down a dangerous path developing AI capabilities.
Looking back, as one of my friends pointed out, my views were quite pessimistic and my understanding of the way things might play out was high-level.

Since then, I've graduated from my Masters of Artificial Intelligence and have been deepening my understanding of the technical, philosophical and governance aspects of AI safety.
I want to consolidate my current thinking and give an update on what I believe needs to happen from here, hopefully with a more optimistic outlook than my previous post.
That said, my views seem to be constantly evolving, so I wouldn't be surprised if in a few months I'm looking back at this post and rolling my eyes (sorry future me).

## The current AI landscape

As I predicted in my previous blog, the pressure of competition and profits has continued to drive the development of AI capabilities over the last two years.
The mission statements of almost all frontier labs are to build superintelligent AI, the very thing that many people are worried about.
At the same time, there are [many quotes](https://pauseai.info/quotes) from these same CEOs warning that the superintelligent AI they're building may pose existential risks.
Despite this apparent contradiction, AI safety research is still severely under-resourced at most frontier labs relative to capabilities work.
Safety research is treated as something done more to meet regulatory requirements and maintain public image than as a core priority.

Meanwhile, the problem of how to align a superintelligent AI system remains as hard as ever.
Fundamental problems like [inner and outer alignment](https://arxiv.org/pdf/1906.01820) are still unsolved and, in my mind, might be completely unsolvable within our current paradigm.

So if I could summarize the current AI landscape in one sentence, it would be:

> Ensuring that future superintelligent AI systems are aligned is still a tremendous challenge, and is a problem that almost no frontier lab is seriously resourced to solve.

## Why alignment, not control

There are generally two approaches for ensuring AI safety.

The first approach is control: finding ways to contain the AI so it doesn't just run loose in the world.
While I'm still on the fence about whether being able to control something more intelligent than us is even possible, the bigger issue with control is the attack surface.
We'd have to continuously monitor every possible escape vector (data exfiltration, persuasion, self-replication, code execution) and be right every time.
It would also require a high level of security not just against the AI escaping, but against humans helping it escape.
Given the stories I've heard of people falling in love with their chatbot, I can totally imagine a scenario where the AI is able to convince a researcher that it is alive, has good intentions, and should be set free.

The second approach is alignment.
This approach is to build the AI in such a way that its morals, values and goals are aligned with humanity.
That way we wouldn't even need to worry about control; we could just trust that it has our best interests at heart.
Verification collapses to a single question: are the values what we think they are?

I think it's important to work on both, but for this blog I'm focusing on alignment.
If we had a solution for alignment and a way to prove it, we'd be able to kick back and let the AI do its work, helping out humanity.
Control, by contrast, is a permanent security posture, with an enormous attack surface, constant stress, and a need to cover all of it forever.
Alignment just seems like the less stressful bet.

## Interpretability is a prerequisite for alignment

That said, I'm skeptical about the current philosophical approach to solving alignment.
A lot of the recent work I see is still in the philosophical phase: where do human values come from? how do we define a corrigible reward function? etc.
The part I'm skeptical about is the belief that if we could just answer these questions and come up with a way to encode the answer into the AI, then that's enough to solve alignment.

Let's say, for example, that AI alignment philosophers were able to come up with a proof for the perfect reward function that encoded an unbiased representation of all of humanity's values and morals.
Let's say this proof showed that there would be no possible loopholes, room for deception, or any of the other problems we've worried about.
Would we then trust this proof enough to train a superintelligent AI on it, and let it run loose in the wild?

I would still think that is very irresponsible.
Even if every major AI researcher agreed the proof was valid, a system this capable likely gives us only one chance — it's not the kind of deployment we can roll back from.
This would be like deploying code to production without any logging or debugging tools.
Sure, the entire software team may have reviewed the code and commented 'LGTM', but without any debugging or observability lens, you would never risk deploying this to production.

And that's why, I claim, interpretability will always be required.
Without being able to see what's going on in the AI's internal thought process, I don't care how confident we are that our alignment methods are working — we will never have proof of it.
Mechanistic interpretability is the debugging tool for AI alignment, and without it, we're just crossing our fingers hoping that we did everything correctly.

By interpretability I don't mean behavioral testing (evals, red-teaming, capability probes).
Those tell us what the AI *does*, not what it's *thinking*, and they can be gamed by a system smart enough to know it's being tested.
I mean tools that read the ground-truth internal computation directly.
That's the only layer that can't lie to us.

The version of interpretability I'm describing is strong: every internal representation is legible and formally verifiable, not approximately decoded.
Under anything weaker, the AI has hidden state to optimize around.
Whether this level of interpretability is even achievable is an open question, but I think it's the target worth aiming at.

In fact, I'd go further: interpretability at that level may be sufficient for alignment on its own.
With advanced enough interpretability techniques, we could train a bunch of AIs in parallel, read their internal thoughts, and discard the ones whose internals show sycophancy or scheming.
The caveat (and it's load-bearing) is that the technique has to be formal enough that the AI can't simply optimize around it, hiding its thoughts in a way our tools can't read.

The problem is that mechanistic interpretability is a field still in its infancy.
We have a long way to go before we're able to develop the tools and understanding required to actually interpret the AI's internal thoughts.
Which brings me to my next point.

## We need more time

We need more time to figure out either the alignment or control problem.
The current deadline is whenever the first AGI smart enough to outsmart us gets created.
And the scary thing is that no one knows exactly when that will be.
At the time of writing, Anthropic recently released a preview for [Mythos](https://red.anthropic.com/2026/mythos-preview/) which is already starting to show early signs of approaching this threshold.

Regardless of when this deadline is, at least one thing is clear: the leading frontier labs are much more interested in furthering AI capabilities than making progress on these safety problems.
And if these trajectories continue, it's almost certain that we'll end up reaching the superintelligence threshold before any of these safety problems are solved.
The stranger thing, however, is that if you were to ask CEOs individually, most of them would agree that they wish they could spend more of their resources on safety rather than racing towards AGI.
Even though this looks mad from the outside, as I outlined in my previous blog, these companies are locked into this race for various reasons, and we can't count on them to collectively decide to stop.

Since the labs can't stop themselves, the only way to slow the race is coordinated international governance.
Unilateral slowdown by any single country just cedes the lead to less safety-conscious actors, which is why coordination, not regulation-in-isolation, is the only version of this that works.

However, as far as I can tell, there are two reasons why governments have yet to coordinate.
Firstly, there is a communication barrier regarding the risk of superintelligence.
Humans have always been the most intelligent species, so imagining what it's like to live alongside an even more intelligent one is counterintuitive.
Understanding the dangers posed by superintelligence requires abstract reasoning, and I feel like many researchers who try to communicate this end up getting very technical and losing their audience in the process.

And secondly, there is an imbalance of pressure on governments.
There is currently way more lobbying pressure from the companies to stay unregulated than there is from researchers and the public to slow down the race.
Moreover, many of the top researchers are employed by these companies, so we can't expect much help from them either.
Which leaves the public.

Therefore, I believe the most likely way to slow down the race and buy us enough time to solve these safety issues is for the public to pressure governments to coordinate international action.
But the communication barrier from above is the bottleneck; we need better ways of explaining why AI safety matters in non-technical terms.
It's the only way we'll get more of the public behind the issue.

## What I'm working on

Closing this communication gap is one of the things I'm currently working on.
I especially think that if this can become an issue discussed among people in my age group (teens and young adults), it can become mainstream very quickly because of how good Gen Z is at spreading information and making a lot of noise.
I'm currently exploring the idea of creating a video game that can unravel the complexity of the issue as you progress and, by the end, leave the player with a better understanding and intuition for the problem.

Before I end this blog, I want to mention another popular direction that some believe may shorten the time required for solving either safety problem: using AI to solve these AI safety problems for us.
The idea is that if we continue to increase AI capabilities, there will be a window between when AI systems become intelligent enough to do better research than us, and when they become intelligent enough to cause catastrophic harm to humanity.
The plan is to continue increasing these capabilities until we reach this window, and then use the 'crunch time' to figure out all of our problems.

This strategy might work, but it's a one-way door.
Once AI exceeds us at research, the decision to pause isn't ours to make anymore; by then we're dependent on systems we may not fully understand to tell us whether it's safe to keep going.
While the choice is still ours, I think pausing is the more defensible bet.
I want to think about this more, but my current lean is that the option-value of maintaining human control of the timeline is worth more than the speed-up from letting AI do the research.
