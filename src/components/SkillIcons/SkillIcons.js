import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SkillIcons = (props, context) => {
  const {
    theme: { colorPrimary }
  } = context;

  return (
    <div className="skill-icons animate-icons">
      <a>
        <i className="fab fa-js" style={{ color: colorPrimary }} />
      </a>
      <a>
        <i className="fab fa-vuejs" style={{ color: colorPrimary }} />
      </a>
      <a>
        <i className="fab fa-react" style={{ color: colorPrimary }} />
      </a>
      <a>
        <i className="fab fa-angular" style={{ color: colorPrimary }} />
      </a>
      <a>
        <i className="fab fa-html5" style={{ color: colorPrimary }} />
      </a>
      <a>
        <i className="fab fa-css3" style={{ color: colorPrimary }} />
      </a>
    </div>
  );
};

SkillIcons.contextTypes = {
  theme: PropTypes.any
};

export default SkillIcons;
