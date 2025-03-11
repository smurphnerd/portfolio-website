import { BlogPost } from "..";
import { WhyImScaredAboutTheFutureOfAIThumbnail } from "../../../assets/thumbnails";
import { BlogTable } from "../../../components/BlogTable";
import { InTextAnchor } from "../../../components/InTextAnchor";

export const WhyImScaredAboutTheFutureOfAI: BlogPost = {
  title: "Why I'm Scared About The Future Of AI",
  date: "Tuesday 11 June 2024",
  thumbnail: WhyImScaredAboutTheFutureOfAIThumbnail,
  blurb: "An explanation of some of my key concerns about the future of AI...",
  route: "why-im-scared-about-the-future-of-ai",
  content: (
    <>
      <p>
        Being that I'm in my first year in my master's in AI, and, if all goes
        well, next year I'll be working on my thesis (still clueless about what
        to do it on), I figure that I should do what any good researcher does:
        express their opinions on the internet. This blog is about why I'm
        worried about the future relating to AI and is why I decided to
        undertake my masters in the first place.
      </p>
      <p>
        The development of powerful Artificial General Intelligence (AGI)
        working alongside us humans would bring about an amazing new chapter for
        humanity. Imagine a world where the production of goods and resources is
        seamlessly automated, ensuring that basic needs like food are accessible
        to all. Imagine a future where scientific breakthroughs occur at an
        unprecedented rate, eradicating many diseases and accelerating our
        understanding of profound questions about our existence, such as the
        search for life beyond Earth. In such a world, we become wiser, finding
        ways to end senseless conflicts and learning to live together in
        harmony. However, whether we can reach this point will depend on how
        we're able to navigate the critical decades ahead.
      </p>

      <p>
        As I mentioned, there are two essential features of AGI: it must be 1)
        'powerful' and 2) 'working alongside us humans'. These are distinct
        challenges in the AI industry, with the former relating to AI
        capabilities and the latter to AI safety. And to reach my described
        utopia, both of these need to be addressed.
      </p>
      <BlogTable
        table={
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Capabilities</th>
                <th>No capabilities</th>
              </tr>
              <tr>
                <th>Safety</th>
                <td>
                  Utopia: AGI works powerfully and safely alongside us humans
                </td>
                <td>Safe but ineffective AI</td>
              </tr>
              <tr>
                <th>No safety</th>
                <td>Dangerous AGI (Terminator)</td>
                <td>Ineffective and unsafe AI</td>
              </tr>
            </tbody>
          </table>
        }
      />
      <p>
        While I'm optimistic that we'll eventually reach the point where AI
        capabilities achieve AGI level, I'm concerned that we won't match this
        progress on the safety front. Specifically, I'm afraid that we'll end up
        in that bottom left quadrant of dangerous AGI. My concern is twofold:
        first, there are economic barriers that hinder the development of AI
        safety, and second, there are fundamental philosophical barriers that
        make achieving AI alignment inherently difficult.
      </p>

      <p>
        In 2020 it was estimated that around
        <InTextAnchor
          text="$50 million"
          href="https://80000hours.org/problem-profiles/artificial-intelligence/#fn-4"
        />
        was spent towards contributing to AI safety, whereas billions were spent
        on capabilities. The reason for this discrepancy is that in the current
        day, everyone is more caught up with <i>what</i> AI can do as opposed to{" "}
        <i>how</i> they do it. And this is understandable. From the consumer's
        perspective, having a personal agent that is able to accelerate your
        workflow is cool. Why would you care about the architecture and
        algorithms that are running under the hood? As long as it gets the job
        done, we leave it at that. And because having AI with capabilities is
        what matters to the consumer, this is what will matter to the businesses
        developing them.
      </p>

      <p>
        A corresponding reason why companies won't pay attention to AI safety is
        the economic concept knows as the 'Free-rider problem'. This is a type
        of market failure that occurs when individuals or companies benefit from
        public goods and common pool resources without having to pay for them.
        In the context of AI, while every company may acknowledge the necessity
        of AI safety, it is more economically advantageous for them to focus on
        profitable endeavors and wait others to address the safety issues, which
        they can then adopt later. As a result, with each company adopting this
        mindset, the responsibility and funding of AI safety research falls on
        governments and charities, which is far less appealing to leading AI
        researchers.
      </p>

      <p>
        This brings me to my second concern. Let's say something does change and
        AI research becomes a more sought-after field. While there is currently
        <InTextAnchor
          text="some work"
          href="https://aisafetyfundamentals.com/blog/what-is-ai-alignment/"
        />
        being done in several focused areas of AI alignment, I believe that,
        ultimately, a 'safe' AI will have to be one that intrinsically
        understands human values, emotions and philosophy. However, even if we
        develop the technology to encode these aspects, how will we ever agree
        on what values to instill when we can't even agree on what's 'right'
        among ourselves? Every nation has a different worldview, so one solution
        might be to delegate this question to governments. But this will
        inevitably lead to AI becoming a tool of political power or a weapon of
        war. Until we can reach a global consensus of fundamental ethical
        principles, how can we expect to introduce an ultra-intelligent,
        ultra-capable being into the world? Because of this, I believe a great
        deal of work in philosophy and global affairs must be done before we can
        create fully aligned AI.
      </p>

      <p>
        As you can see, I believe there is a lot of work to be done in the field
        of AI safety before we can develop powerful AGI. While the growth of AI
        capabilities seems exponential, the progress in AI safety research
        appears negligible. Given that more than half of the world's leading AI
        experts predict Human-Level Machine Intelligence will arrive
        <InTextAnchor
          text="before 2050,"
          href="https://blog.aiimpacts.org/p/2023-ai-survey-of-2778-six-things"
        />
        I can't help but to feel that, at our current pace, we won't be
        adequately prepared for it.
      </p>
    </>
  ),
};
