import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SocialIcons = (props, context) => {
  const {
    theme: { colorPrimary }
  } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/firefox0102"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/firefox0102"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/pfinny"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
