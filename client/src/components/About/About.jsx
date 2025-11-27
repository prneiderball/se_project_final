import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about__columns-wrapper">
      <div className="about__column-img"></div>
      <div className="about__column-text">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}
export default About;