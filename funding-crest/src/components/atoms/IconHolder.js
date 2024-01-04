import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const IconHolder = ({ activeLink, iconName, color }) => {
  const [hovered, setHovered] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const iconStyle = {
    height: "20px",
    position: "relative",
    width: "30px",
  };

  const anchorStyle = {
    backgroundColor: hovered ? "dimgray" : color, // Change the background color when hovered
    outline: "none",
    border: "none",
    width: "40px",
  };

  return (
    <div style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className="btn btn-primary" style={anchorStyle} href="#!" role="button">
        <i className={iconName}></i>
      </a>
    </div>
  );
};

IconHolder.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default IconHolder;