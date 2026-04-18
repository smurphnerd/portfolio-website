import { Project } from ".";
import { HuggingFaceIcon, PythonIcon, PytorchIcon } from "../../assets/icons";
import { SparsityInterpretabilityThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const SparsityInterpretability: Project = {
  thumbnail: SparsityInterpretabilityThumbnail,
  title: "Sparsity as a Lens for Interpretability",
  client: "Monash University - Minor Thesis",
  blurb:
    "My Masters of AI minor thesis project where I used sparsity to uncover the functional organization of Vision Transformers and discover task-specific subnetworks.",
  route: "sparsity-interpretability",
  techSheet: [
    "Python",
    "Pytorch",
    "Hugging Face",
    "Gradient-Based Pruning",
    "NSGA-II",
    "Mechanistic Interpretability",
  ],
  about: (
    <>
      <p>
        This minor thesis project was the culmination of all I had learned over
        the two years of my Masters of AI. My initial reason for enrolling in
        the program was because I wanted to contribute to AI safety research, so
        I saw this project as the perfect stepping stone to that goal.
      </p>
      <p>
        As I had already started learning about AI safety research topics
        outside of core coursework, such as mechanistic interpretability, this
        inspired my choice of topic for this project. My supervisors were a mix
        of researchers from the
        <InTextAnchor
          href="https://ailecs.org/"
          text="AiLECS lab"
          afterSpace={false}
        />
        , most notably Professors Thanh Nguyen and Campbell Wilson.
      </p>
      <p>
        Overall, the hardest part of this project was coming up with the right
        research direction. Similar to the
        <InTextAnchor
          href="/projects/pacman-ctf"
          text="Pacman CTF project"
          afterSpace={false}
        />
        , I had some really ambitious goals at the start. In particular, I spent
        a lot of time brainstorming several alternative approaches to sparse
        autoencoders for verifying the linear representation hypothesis.
        However, I kept finding holes in my ideas and I knew that if I kept
        going in this direction, I wouldn't have anything to show by the end.
      </p>
      <p>
        Thus, I decided to pivot a couple of months before the deadline, when I
        was introduced to the lottery ticket hypothesis, which formed the basis
        for my final idea of finding task-specific subnetworks. From there, I
        came up with a framework for pruning transformers, as well as two
        optimization approaches for finding the right pruning configuration. I
        ended up with several positive findings on both the interpretability and
        the pruning efficiency sides of the project. The project was also an
        amazing learning experience for me, especially in learning how to work
        within a compute cluster and manage long-running experiments.
      </p>
      <p>
        Despite the success of this project, for some reason, I still wasn't
        very happy with it. I'm not sure if it's because I'm a perfectionist or
        it's because this project was the result of another late pivot. Even my
        supervisors wanted me to submit it to some conferences to try to get my
        first publication out, but I never did. If I had to point to something
        concrete, I would say that my unhappiness stemmed from thinking the
        methodology was too simplistic, noticing a few holes in it, feeling that
        finding task-specific subnetworks wasn't a problem people were
        particularly interested in, and doubting that this work would have any
        real impact or applications.
      </p>
    </>
  ),
  resources: [
    <>
      Read my minor thesis
      <InTextAnchor href="/sparsity-interpretability-report.pdf" text="here." />
    </>,
    <>
      View the source code on my
      <InTextAnchor
        href="https://github.com/smurphnerd/Sparsity-as-a-Lens-for-Interpretability"
        text="Github."
      />
    </>,
  ],
  languages: [PythonIcon, PytorchIcon, HuggingFaceIcon],
  date: "January - December 2025",
};

export default SparsityInterpretability;
