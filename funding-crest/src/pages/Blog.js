"use client";
import React, { useState, useEffect } from "react";
import myImage from "../images/FC.svg";
import CustomNavbar from "../components/organisms/CustomNavbar";
import TopNavbar from "../components/organisms/TopNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadStoryCarousel from "../components/organisms/HeadStoryCarousel";
import SecondaryHeadlinerTag from "../components/atoms/SecondaryHeadlinerTag";
import SubstoryHeader from "../components/atoms/SubstoryHeader";
import SubStoryAuthor from "../components/atoms/SubstoryAuthor";
import SubstoryLine from "../components/atoms/SubstoryLine";
import FullSubstory from "../components/organisms/FullSubstory";
import HeaderSectionTag from "../components/atoms/HeaderSectionTag";
import SubsectionHeader from "../components/atoms/SubsectionHeader";
import ExampleCarouselImage from "../components/molecules/ExampleCarouselImage";

function Blog() {
  return (
    <div style={{ backgroundColor: "#dee2e6", height: "150vh" }}>
      {/* <img src={myImage} alt="Funding Crest Logo" /> */}

      <TopNavbar />
      <CustomNavbar activeLink="blog" />
      <div className="container-fluid ps-0 pe-0">
        <div className="row no-gutters">
          <div className="col-12 col-lg-6 mt-4">
            <HeadStoryCarousel />
          </div>
          <div className="col-12 col-lg-6 mt-4">
            <div className="mt-3"></div>

            <FullSubstory
              link={"/FirstStory"}
              headlinerTagText={"Pitch Competition"}
              storyName={"What should you wear to your next pitch competition?"}
            />
            <SubstoryLine />

            <FullSubstory
              link={"/FirstStory"}
              headlinerTagText={"Grant"}
              storyName={"What should you wear to your next pitch competition"}
            />
            <SubstoryLine />
            <FullSubstory
              headlinerTagText={"Accelerator / Incubator"}
              storyName={"What should you wear to your next pitch competition"}
            />
          </div>

    
          <div
            className="row no-gutters ms-5 mt-5"
          >
            <div style={{ marginLeft: "20px" }}>
              <HeaderSectionTag text="View all pitch competition articles" />
              <SubsectionHeader text="Best Pitch Competition Articles" />
              <div className="container">
              <div className="row" style={{marginLeft: "-110px"}}>
                <div className="col-lg-3 col-6">
                  <ExampleCarouselImage imageName="https://roxburynjchamber.org/wp-content/uploads/1200x630.png" />
                </div>
                <div className="col-lg-3 col-6">
                  <ExampleCarouselImage imageName="https://roxburynjchamber.org/wp-content/uploads/1200x630.png" />
                </div>
                <div className="col-lg-3 col-6">
                  <ExampleCarouselImage imageName="https://roxburynjchamber.org/wp-content/uploads/1200x630.png" />
                </div>
                <div className="col-lg-3 col-6">
                  <ExampleCarouselImage imageName="https://roxburynjchamber.org/wp-content/uploads/1200x630.png" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
