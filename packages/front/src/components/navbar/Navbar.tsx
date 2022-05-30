import { About } from "@components/about/About";
import { MainPage } from "@components/home/MainPage";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const Navbar = (props: {}) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
};
