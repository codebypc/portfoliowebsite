import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Hero } from "./Hero";
import { Skills } from "./Skills";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        {/* <Route path="/" element={<Skills />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
