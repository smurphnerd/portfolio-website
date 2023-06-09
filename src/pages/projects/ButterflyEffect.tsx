import React from "react";
import Project from "../../components/Project";
import { ButterflyEffectThumbnail } from "../../assets/thumbnails";
import { ButterflyEffectDemo } from "../../assets/demos";

const ButterflyEffect: React.FC = () => {
  return (
    <Project
      thumbnail={ButterflyEffectThumbnail}
      title="The butterfly effect"
      client="Harvard CS50x"
      blurb="A full stack app that allows users to create and save their own visual tree diagrams which can be used for functions such as planning events, family trees and writing pseudocode."
      demo={ButterflyEffectDemo}
      about={
        <>
          <p>
            As part of my final project for the CS50x course, I decided to
            create this app that lets users sign and start making their own
            colorful, visual tree diagrams.
          </p>
          <p>
            As my first full stack project, it was a huge learning curve. Every
            part of coding the app was a new experience and, because of that, I
            learned a lot from it. I learned how powerful using a framework
            could be, how to hook up a database and perform CRUD actions on it,
            how to modify the UI with Javascript (a very frustrating
            experience), and even how to center a div with CSS!
          </p>
          <p>
            Looking back on it, I'm really happy that I set myself such a huge
            challenge for my final project. Throwing myself in the deep end
            early on helped me establish a strong foundation in app development
            and is what will continue to help me in all my current and future
            projects. Moral of the story - don't be scared of taking on new
            challenges!
          </p>
        </>
      }
      techSheet={["Flask", "SQLite", "JavaScript", "HTML", "CSS"]}
      resources={[
        <>
          View the source code on my&nbsp;
          <a
            href="https://github.com/therealSmurphy/CS50-butterfly-effect"
            target="blank"
          >
            Github
          </a>
        </>,
      ]}
    />
  );
};

export default ButterflyEffect;
