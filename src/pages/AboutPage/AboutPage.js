import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import SkillIcons from "@components/SkillIcons";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About Me</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I am a positive thinking, self starting software developer who
              dreams in JavaScript and someday hopes to be happy with my
              application architechture. I have a passion for "Front-End" web
              development and single page apps, and love to explore new
              technologies that push the bleeding edge of what a web browser is
              capable of. I like <span className="highlight">JavaScript</span>{" "}
              and everything focused around web development.
            </p>
            <p>
              I also enjoy presenting at conferences, playing{" "}
              <span className="highlight">ping pong</span>, and traveling around
              the world experiencing new cultures and making connections.
            </p>
            <p>
              React, Styled Components, Node.js, Firebase, Vue.js, Apollo
              Client, and GraphQL are some of my favorite technologies to work
              with. I'm also currently co-hosting{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
                href="https://www.meetup.com/Atlanta-Vue-js-Meetup/"
              >
                The Atlanta Javascript Meetup
              </a>
            </p>
            <SkillIcons />
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
