import React from "react";
import "./style.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="container">
      <Navigation />
      <HeroSection />
    </div>
  );
}
