import React from "react";
import Hero from "../components/Home/Hero";
import AboutBrief from "../components/Home/AboutBrief";

export default function Home() {
  return (
    <div className="home page">
      <Hero />
      <AboutBrief />
    </div>
  );
}
