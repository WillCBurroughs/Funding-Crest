"use client";
import React, { useState, useEffect } from "react";
import CustomNavbar from "../components/organisms/CustomNavbar";
import TopNavbar from "../components/organisms/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function TwentyPitchCompetitionsInKentuckyYouCanApplyTo() {
  return (
    <div style={{ backgroundColor: "#dee2e6", height: "150vh" }}>
      {/* <img src={myImage} alt="Funding Crest Logo" /> */}

      <TopNavbar />
      <CustomNavbar activeLink="blog" />
      <div className="container-fluid ps-0 pe-0">

        <h1> TwentyPitchCompetitionsInKentuckyYouCanApplyTo </h1>

      </div>
    </div>
  );
}

export default TwentyPitchCompetitionsInKentuckyYouCanApplyTo;