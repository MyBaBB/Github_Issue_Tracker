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
      <div className="flex justify-center  ">
        <FaGithub size={120} className="text-blue-500 dark:text-gray-200 bg-grey-500 dark:bg-blue-900 mb-10 " />
      </div>
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
