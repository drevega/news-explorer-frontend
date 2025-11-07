import React from "react";
import "./About.css";

// import authorImage from "../../assets/author.jpeg";

// About component with information about author
function About() {
  return (
    <section className="about">
      {/* <img src={authorImage} alt="Author" className="about__image" /> */}
      <div className="about__container">
        <div className="about__image-placeholder"></div>
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hello, my name is Andrea! My journey into coding started at the
            beginning of 2025 when I decided I wanted to do something completely
            different with my life. I enrolled in TripleTen&apos;s SWE program
            where I learned the basics of HTML, CSS, JavaScript, React, Node.js,
            Express, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
