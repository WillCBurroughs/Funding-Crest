import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../CustomNavbar.css";
import IconHolder from "../atoms/IconHolder";

const TopNavbar = ({ activeLink }) => {
  const recommendedStories = [
    // Your recommended stories data
    { title: "Thirty best places to apply for grants" /* other details */ },
    { title: "What to wear to a pitch competition" /* other details */ },
    { title: "hello" /* other details */ },
    // ... more stories
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [visibleStoryIndex, setVisibleStoryIndex] = useState(0);

  const nextStory = () => {
    const nextIndex = (currentStoryIndex + 1) % recommendedStories.length;
    setCurrentStoryIndex(nextIndex);

    // After a delay, update visibleStoryIndex for transition effect
    setTimeout(() => {
      setVisibleStoryIndex(nextIndex);
    }, 100); // Adjust the delay time for better transition effect
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextStory();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentStoryIndex]);

  return (
    <nav
      className="navbar d-none d-lg-block navbar-expand-lg navbar-light"
      style={{ height: "50px", backgroundColor: "rgb(27,27,30)" }}
    >
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-between align-items-center py-0">
          <h2
            style={{
              color: "white",
              fontSize: "25px",
              marginLeft: "70px",
              top: "14px",
              position: "absolute",
            }}
          >
            Recommended Stories:{" "}
          </h2>
          {recommendedStories.map((story, index) => (
            <h2
              key={index}
              style={{
                color: "lightgray",
                marginLeft: "100px", // Adjust the spacing as needed
                fontSize: "25px",
                transition: "opacity 1.5s ease-in-out",
                opacity: index === visibleStoryIndex ? 1 : 0, // Show only the visible story
                position: "absolute",
                top: 15,
                left: 250,
                right: 60,
                bottom: 0,
                pointerEvents: index === visibleStoryIndex ? "auto" : "none",
              }}
            >
              {story.title}
            </h2>
          ))}

          <div className="container-fluid d-flex justify-content-end">
            <div className="me-5 d-flex">
              <div className="me-3">
                <IconHolder
                  color="#3b5998"
                  iconName="fab fa-facebook-f"
                  className="me-5"
                />
              </div>
              <div className="me-3">
                <IconHolder
                  color="#ed302f"
                  iconName="fab fa-youtube"
                  className="me-5"
                />
              </div>
              <div className="me-3">
                <IconHolder
                  color="#0082ca"
                  iconName="fab fa-linkedin-in"
                  className="me-5"
                />
              </div>
              <div className="me-3 d-none d-xl-block">
                <IconHolder
                  color="#55acee"
                  iconName="fab fa-twitter"
                  className="me-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

TopNavbar.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default TopNavbar;
