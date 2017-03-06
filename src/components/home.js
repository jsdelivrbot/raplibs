import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className="home-container">
        <svg width="100" height="100">
          <defs>
            <pattern id="adlibs-image" patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlinkHref="/assets/adlibs.jpg" x="0" y="0" width="100" height="100" />
            </pattern>
          </defs>
          <polygon points="0,0 100,0 50,100" fill="url(#a)" />
        </svg>
        <div className="triangle-option container-even">
          <Link to="/adlibs" />
        </div>

        <div className="triangle-option container-odd">
          <Link to="/rappers" />
        </div>
      </div>
    )
  }}
)
