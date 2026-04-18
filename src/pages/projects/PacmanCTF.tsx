import { Project } from ".";
import { PacmanCompetitionDemo } from "../../assets/demos";
import { PythonIcon } from "../../assets/icons";
import { PacmanCTFThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const PacmanCTF: Project = {
  thumbnail: PacmanCTFThumbnail,
  title: "Pacman Capture the Flag Challenge",
  client: "Monash University - FIT5222",
  blurb:
    "I developed Pacman agents for playing capture the flag, consistently placing among the top teams in the in-class competitions and placing first in a tournament.",
  route: "pacman-ctf",
  demo: PacmanCompetitionDemo,
  techSheet: ["Python", "PDDL", "Approximate Q-Learning", "Bayesian Filtering"],
  about: (
    <>
      <p>
        This competition was part of the second assignment for FIT5222. By this
        point in the unit, we were covering topics that I was already familiar
        with such as Q-Learning. The cool thing about this assignment was that
        the constraints for what we were allowed to implement were much more
        relaxed, meaning even deep-learning-based approaches were on the table.
        This relaxation, however, ended up being a curse in disguise.
      </p>
      <p>
        Due to the lack of constraints, I initially got very excited about this
        assignment. I was eager to attempt an AlphaZero-like implementation
        where my agents would be able to learn through self-play. Thus, I spent
        most of my time trying to fit this game into an RL framework. This
        involved figuring out how to encode the game state for varying map
        sizes, which architecture to use for the neural network, and how to
        define the reward function.
      </p>
      <p>
        Unfortunately, more and more problems kept coming up (the major ones are
        mentioned in the report below). I took on more than I could handle given
        the time constraints. And around 70% of the way through the assignment,
        I decided to completely abandon this AlphaZero approach and start over
        from scratch.
      </p>
      <p>
        Despite having little time left, I was still able to develop a
        rule-based implementation featuring a novel heuristic for the low-level
        planner and other novel optimizations for faster search. In the end, we
        had several unit-wide tournaments where my agents ended up placing
        first in one of the final tournaments, and I received full marks for
        the assignment.
      </p>
      <p>
        This assignment was very fun, and a good learning experience regarding
        being more selective in the challenges I try to take on. In this case, I
        ended up wasting a lot of time because I overestimated what I would be
        able to do in the given timeframe. I was still very surprised at how
        quickly I was able to come up with a solution that was among the
        top-performing teams. I also know that my implementation suffered from
        several edge cases and a lack of testing which I might've been able to
        solve if I decided to pivot earlier.
      </p>
    </>
  ),
  resources: [
    <>
      Read my report on
      <InTextAnchor
        href="/pacman-ctf-report.pdf"
        text="Winning the 2025 FIT5222 Pacman Capture the Flag Challenge."
      />
    </>,
    <>
      View the source code on my
      <InTextAnchor
        href="https://github.com/smurphnerd/pacman-ctf"
        text="Github."
      />
    </>,
  ],
  languages: [PythonIcon],
  date: "October 2025",
};

export default PacmanCTF;
