import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import JobApp from "./components/JobApp";
import Navbar from "./components/layout/Navbar";
import About from "./components/About";
import Footer from "./components/layout/Footer";

import "./index.css";

function App() {
  const { t, i18n } = useTranslation;
  return (
    <div className="min-h-dvh overflow-x-hidden bg-gray-500 dark:bg-blue-950">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<JobApp />} />
        </Routes>
      </Router>
      <a href="./components/JobForm.jsx">
        <div className="flex justify-center">
          <FaGithub size={140} className="text-blue-950 dark:text-gray-200 bg-gray-200  dark:bg-gray-600 mt-4 mb-10 
          border-[3px] rounded-full border-blue-950  border-dotted  dark:border-gray-200 p-1 " />
        </div>
      </a>
      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
