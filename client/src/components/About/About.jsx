import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about__columns-wrapper">
      <div className="about__column-img"></div>
      <div className="about__column-text">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          I’m, Phillip, a backend specialized full-stack developer who loves
          taking complicated systems and making them understandable and usable.
          I work best when I’m able to step back and see how everything fits
          together...architecture, behavior, and the way real people actually
          interact with software. I tend to pick things up quickly, and I care a
          lot about how human psychology and user behavior shape good
          engineering decisions.
        </p>
        <p className="about__text">
          During my recent training with TripleTen, I worked through several full-stack
          projects that strengthened my understanding of backend logic, API
          design, and systems thinking. More importantly, it clarified how I
          want to build software: by focusing on clarity, human behavior, and
          the real problems users face. Everything I learn is aimed at becoming
          more effective at creating tools that genuinely help people.
        </p>
      </div>
    </section>
  );
}
export default About;
