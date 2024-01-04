"use client";
import React, { useState, useEffect } from "react";
import myImage from "./images/FC.svg";
import CustomNavbar from "./components/organisms/CustomNavbar";
import TopNavbar from "./components/organisms/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadStoryCarousel from "./components/organisms/HeadStoryCarousel";
import SecondaryHeadlinerTag from "./components/atoms/SecondaryHeadlinerTag";
function App() {
  return (
    <div style={{ backgroundColor: "#dee2e6", height: "150vh" }}>
      {/* <img src={myImage} alt="Funding Crest Logo" /> */}

      <TopNavbar />
      <CustomNavbar activeLink="blog" />
      <div className="container-fluid ps-0 pe-0">

        <h> This is the page we want to see</h>

      </div>
    </div>
  );
}

export default App;