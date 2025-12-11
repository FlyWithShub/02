import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ServiceDetails from "./Pages/ServiceDetails";

const App = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="global-styles">
          <div className="style-overrides w-embed"></div>
          <div className="color-schemes w-embed"></div>
          <div className="hubspot-styles w-embed">Custom Styles</div>
        </div>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<ServiceDetails />} path="/service-details" />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
