import { ILearnThumbnail } from "../../assets/thumbnails";
import { ILearnDemo } from "../../assets/demos";
import { Project } from ".";
import { DjangoIcon, PostgresqlIcon } from "../../assets/icons";

const ILearn: Project = {
  title: "iLearn website (prototype)",
  client: "iLearn Education",
  blurb:
    "A prototype for an online practice exam hub that helps students prepare for various competitive selective entry exams across Melbourne, Victoria.",
  thumbnail: ILearnThumbnail,
  demo: ILearnDemo,
  route: "ilearn",
  about: (
    <>
      <p>
        This was prototype for a project for a close friend who works in the
        Australian tutoring industry. With iLearn, he aims to bring this
        traditional, in-person industry to the digital world. While there was
        already an existing website for iLearn, it was slow, glitchy and not
        very user friendly. So my job was to redo the entire site, fixing these
        issues, which had proven to be a challenge.
      </p>
      <p>
        As this website was to be used in a more professional setting than my
        usual projects, backend security was something that I had to take into
        account which is why I decided on prototyping with the Django framework.
        While this framework was similar in a lot of ways to Flask (which I'd
        used in the past), the sheer size of it meant I continuously had to
        learn new things.
      </p>
      <p>
        The prototype gave lots of insight into challenges that I'd have to
        overcome in the future. It also helped me to learn about different
        backend technologies and how to use them in a real-world setting.
        Overall, the prototype was a great success, giving me a lot of wisdom
        moving forward with iLearn.
      </p>
    </>
  ),
  techSheet: ["Django", "PostgreSQL", "JavaScript", "HTML", "CSS"],
  languages: [DjangoIcon, PostgresqlIcon],
  date: "November 2022 - February 2023",
};

export default ILearn;
