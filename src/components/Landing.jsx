import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { MyProject } from "./MyProject";
import { ContactForm } from "./ContactForm";
import { Testomonial } from "./Testomonial";
import { STATISTIC } from "./STATISTIC";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/projects" element={<MyProject />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
        <Route path="/testimonials" element={<Testomonial />}></Route>
        <Route path="/report" element={<STATISTIC />}></Route>

      </Routes>
    </BrowserRouter>
  );
};
