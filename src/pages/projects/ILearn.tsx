import React from "react";
import Project from "../../components/Project";
import { ILearnThumbnail } from "../../assets/thumbnails";
import { ILearnDemo } from "../../assets/demos";
import { Helmet } from "react-helmet";
import { InTextAnchor } from "../../components/InTextAnchor";

const ILearn = () => {
  return (
    <>
      <Helmet>
        <title>iLearn</title>
      </Helmet>
      <Project
        title="iLearn website"
        client="iLearn Education"
        blurb="An online practice exam hub that helps students prepare for various competitive selective entry exams across Melbourne, Victoria."
        thumbnail={ILearnThumbnail}
        demo={ILearnDemo}
        about={
          <>
            <p>
              This is a ongoing project I'm doing for a close friend who works
              in the Australian tutoring industry. With, iLearn he aims to bring
              this traditional, in-person industry to the digital world. While
              there is already an existing website for iLearn, it is slow,
              glitchy and not very user friendly. So my job is to redo the
              entire site, fixing these issues, which has proven to be a
              challenge thus far.
            </p>
            <p>
              As this website is to be used in a more professional setting than
              my usual projects, backend security is something that I've had to
              take into account which is why I decided on the Django framework
              for this project. While this framework is similar in a lot of ways
              to Flask (which I've used in the past), the sheer size of it means
              I'm continuously having to learn new things. The current challenge
              I'm facing is reworking the backend to make it more user friendly
              for my friend and his employees.
            </p>
            <p>
              While this project is nearing completion, I think it'll be this
              final stretch that's the hardest. While most of the major pieces
              have been set up, there a lot of details that keep popping up,
              making the to-do list seem never-ending. So, wish me luck!
            </p>
          </>
        }
        techSheet={["Django", "PostgreSQL", "JavaScript", "HTML", "CSS"]}
        resources={[
          <>
            Check out the current
            <InTextAnchor
              href="https://www.ilearneducation.com.au/"
              text="iLearn website"
            />
          </>,
        ]}
        otherProjects={{ next: "vault", previous: "butterfly-effect" }}
      />
    </>
  );
};

export default ILearn;
