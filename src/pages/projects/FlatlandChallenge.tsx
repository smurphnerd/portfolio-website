import { Project } from ".";
import { FlatlandCompetitionDemo } from "../../assets/demos";
import { PythonIcon } from "../../assets/icons";
import { FlatlandChallengeThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const FlatlandChallenge: Project = {
  thumbnail: FlatlandChallengeThumbnail,
  title: "Flatland Challenge",
  client: "Monash University - FIT5222",
  blurb:
    "I came first place in my unit's Flatland Challenge, a multi-agent pathfinding problem on complex railway networks with deadlines and malfunctions.",
  route: "flatland-challenge",
  demo: FlatlandCompetitionDemo,
  techSheet: ["Python", "A* Search", "SIPP", "Large Neighbourhood Search"],
  about: (
    <>
      <p>
        This competition was part of my first assignment for FIT5222, a core
        second-year unit as part of my Masters of AI at Monash University. This
        unit focused on planning and automated reasoning, which was a very new
        area for me as many of my previous units and personal projects were
        more deep-learning-based.
      </p>
      <p>
        The purpose of this assignment was to help us learn how to implement
        low-level pathfinding algorithms in a multi-agent environment. I ended
        up spending a lot of time in the literature to learn about different
        methods researchers have used for solving this problem, and adapting
        their code to work with our specific environment. Although I didn't come
        up with anything novel in this assignment, I learned a lot about the
        field by experimenting with different approaches and seeing what worked
        best.
      </p>
      <p>
        The assignment ended with a unit-wide competition with about 300
        students where we all tested our implementations in a complex, dynamic
        railway network to see who could come up with the most efficient path
        for each train. My algorithm ended up taking first place, even beating
        out the staff's implementation, and I received full marks for the
        assignment.
      </p>
      <p>
        Although this was a very stressful assignment, involving plenty of
        late-night coding, the experience was very rewarding. Being able to come
        first against so many of my very smart peers also gave me a huge boost
        of confidence in my own abilities.
      </p>
    </>
  ),
  resources: [
    <>
      Read my report on
      <InTextAnchor
        href="/flatland-challenge-report.pdf"
        text="Winning the 2025 FIT5222 Flatland Challenge."
      />
    </>,
    <>
      View the source code on my
      <InTextAnchor
        href="https://github.com/smurphnerd/flatland-challenge"
        text="Github."
      />
    </>,
    <>
      Learn more about the
      <InTextAnchor
        href="https://www.flatland-association.org/"
        text="original Flatland Challenge"
        afterSpace={false}
      />
      , a benchmark for multi-agent pathfinding in railway networks.
    </>,
  ],
  languages: [PythonIcon],
  date: "May 2025",
};

export default FlatlandChallenge;
