import { Project } from ".";
import { FlutterIcon, GolangIcon } from "../../assets/icons";
import { VodalogicThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const Vodalogic: Project = {
  thumbnail: VodalogicThumbnail,
  title: "Vodalogic App",
  client: "Vodalogic",
  blurb:
    "An end-to-end solution that allows users to monitor and control the temperature and water levels of their swimming pools.",
  route: "vodalogic",
  about: (
    <>
      <p>
        This was another project I did at my placement at
        <InTextAnchor href="https://seventhbeam.com/" text="Seventh Beam." />
        Vodalogic is a new company (at the time of writing) that has developed a
        device that is able to connect to a user's pool and control the various
        bits of hardware in it. Since VodaLogic also wanted users to be able to
        control this device remotely, they approached Seventh Beam to develop an
        app that would allow users to do just that.
      </p>
      <p>
        Being my second project at Seventh Beam, I was able to take on more
        responsibility and work on more complex tasks. In addition to being the
        lead developer for the frontend, I also got to work on the backend,
        making changes to the API and database to support my frontend changes.
        My workflow was a very front-to-back approach, where I would design the
        UI, implement it in Flutter, and then make the necessary updates to the
        backend to serve the new features.
      </p>
      <p>
        This project was a great learning experience for me. Being that it was a
        newer company and a smaller team, I was able to have more insight and
        give more input into the project. I was also able to work more
        independently which allowed me to be more creative and try out new
        design patterns and technologies.
      </p>
    </>
  ),
  techSheet: ["Flutter", "Golang"],
  resources: [
    <>
      Check out Vodalogic's
      <InTextAnchor href="https://www.vodalogic.com/" text="website" />
    </>,
  ],
  languages: [FlutterIcon, GolangIcon],
  date: "June - October 2023",
};

export default Vodalogic;
