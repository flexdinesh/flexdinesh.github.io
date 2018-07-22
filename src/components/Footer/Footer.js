import React from "react";
import PropTypes from "prop-types";

import "./style";

const Footer = (props, context) => {
  const {
    theme: { colorPrimary, textPrimary }
  } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          Reach out to me on<a
            href="https://www.linkedin.com/in/pfinny/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colorPrimary, marginLeft: "6px" }}
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
