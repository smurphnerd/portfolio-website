import { Project } from ".";
import { GolangIcon, NextjsIcon } from "../../assets/icons";
import { WhyLeaveTownThumbnail } from "../../assets/thumbnails";
import { InTextAnchor } from "../../components/InTextAnchor";

const WhyLeaveTown: Project = {
  thumbnail: WhyLeaveTownThumbnail,
  title: "Why Leave Town Admin Console",
  client: "Why Leave Town",
  blurb:
    "A web app that allows businesses to manage their gift card programs, view reports, and create and manage promotions.",
  route: "why-leave-town",
  about: (
    <>
      <p>
        This was my final project at
        <InTextAnchor href="https://seventhbeam.com/" text="Seventh Beam." />
        Why Leave Town is a company that helps communities promote local
        shopping by providing a platform for Australian businesses to create and
        manage gift card programs. Prior to Seventh Beam's involvement, Why
        Leave Town had a very manual process for managing these programs. They
        wanted to automate this process and provide a more user-friendly
        interface for businesses to manage their gift card programs with an
        accompanying mobile app for customers to purchase and use these cards.
      </p>
      <p>
        This was my first project where I was put on as a full stack developer.
        I was responsible for developing features in the backend API in Golang
        and the frontend in NextJS. Being Seventh Beam's first project using
        Next, I had a lot of responsibility in setting up the project structure
        and coming up with design patterns that would act as a foundation for
        future similar projects.
      </p>
      <p>
        I had a lot of fun working on this project. I really enjoyed being able
        to jump between the frontend and backend as it allowed me to have eyes
        over the entire flow of data. I also enjoyed the challenge of working
        with a new language and framework and being able to discuss design
        patterns with the team. Overall, it was a great project to end my time
        at Seventh Beam with.
      </p>
    </>
  ),
  techSheet: ["Golang", "NextJS"],
  resources: [
    <>
      Check out
      <InTextAnchor
        href="https://www.whyleavetown.com/promote-local-shopping/"
        text="Why Leave Town."
      />
    </>,
  ],
  languages: [GolangIcon, NextjsIcon],
  date: "October - December 2023",
};

export default WhyLeaveTown;
