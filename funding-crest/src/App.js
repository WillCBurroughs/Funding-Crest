"use client";
import React, { useState, useEffect } from "react";
import myImage from "./images/FC.svg";
import Blog from "./pages/Blog";
import FirstStory from "./pages/FirstStory"
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element = {<Blog/>} ></Route>
        <Route path="/FirstStory" element = {<FirstStory/>}> </Route>
    </Routes>
  );
}

export default App;
