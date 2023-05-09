import React from "react";
import "./Root.scss";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import { Routes, Route } from "react-router-dom";

import Allcourse from "../../pages/Allcourse/Allcourse";
import Seremony from "../../pages/seremony/Seremony";
const Root = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seremony" element={<Seremony />} />
        <Route path="/all" element={<Allcourse />} />
      </Routes>
    </>
  );
};

export default Root;
