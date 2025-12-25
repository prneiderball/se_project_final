import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about__columns-wrapper">
      <div className="about__column-img"></div>
      <div className="about__column-text">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          I'm Phillip, a full-stack developer specializing in JavaScript. I
          build web applications using React, Node.js, Express, and REST APIs,
          with experience in user authentication, database integration, and
          responsive frontend design.
        </p>
        <p className="about__text">
          Through TripleTen's software engineering bootcamp, I completed several
          full-stack projects including WTWR, a weather-based clothing
          recommendation app that integrates external APIs, along with backend
          API development and task management applications. These projects
          demonstrate my ability to build complete applications from database
          design through frontend implementation.
        </p>
      </div>
    </section>
  );
}
export default About;
