import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="portfolio-item__title">Title</div>

        <div className="portfolio-item__desc">
          Description
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
