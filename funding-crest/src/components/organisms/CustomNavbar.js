import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImage from '../../images/FC.png';
import '../../CustomNavbar.css';

const CustomNavbar = ({ activeLink }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
          style={{ borderColor: 'lightgray' }}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </button>

        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <div className="d-flex w-100 justify-content-between align-items-center py-0">
            <div className="ms-3">
              <a className="navbar-brand ms-5 d-none d-lg-block" href="/">
                <img src={myImage} width={45} height={45} alt="Funding Crest Logo" />
              </a>
            </div>

            <div className="me-3">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${collapsed ? 'w-100 justify-content-center' : 'ms-auto me-5'}`}>
                <li className={`nav-item ${activeLink === 'blog' ? 'active' : ''} me-3 `}>
                  <a className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`} href="/">
                    <b style={{ fontSize: '22px', color: '#fff', fontWeight: "550", textUnderlineOffset: "10px" }} className={`${activeLink === 'blog' ? "text-decoration-underline" : ""}`}>Blog</b>
                  </a>
                </li>
                <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''} me-3`}>
                  <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="/makeCompetition">
                    <b style={{ fontSize: '22px', color: '#CCCCCC', fontWeight: "550", textUnderlineOffset: "10px"}} className={`${activeLink === 'contact' ? "text-decoration-underline" : ""}`}>
                      Contact
                    </b>
                  </a>
                </li>

                <li className={`nav-item ${activeLink === 'subscribe' ? 'active' : ''} me-5`}>
                  <a className={`nav-link ${activeLink === 'subscribe' ? 'active' : ''}`} href="/makeCompetition">
                    <b style={{ fontSize: '22px', color: '#CCCCCC', fontWeight: "550", textUnderlineOffset: "10px" }} className={`${activeLink === 'subscribe' ? "text-decoration-underline" : ""}`}>Subscribe →</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

CustomNavbar.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default CustomNavbar;