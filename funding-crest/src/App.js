"use client";
import React, { useState, useEffect } from "react";
import myImage from "./images/FC.svg";
import Blog from "./pages/Blog";
import TenBestPlacesToApplyForGrants from "./pages/TenBestPlacesToApplyForGrants"
import FirstStory from "./pages/FirstStory"
import CompetingAtPitchComp from "./pages/CompetingAtPitchComp";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element = {<Blog/>} ></Route>
        <Route path="/FirstStory" element = {<FirstStory/>}> </Route>
        <Route path="/Competing-At-Pitch-Competition-This-Is-What-You-Should-Wear" element = {<CompetingAtPitchComp/>}></Route>
        <Route path="/Ten-Best-Places-To-Apply-For-Grants" element = {<TenBestPlacesToApplyForGrants/>}></Route>
    </Routes>
  );
}

export default App;
