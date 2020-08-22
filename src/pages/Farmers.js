import React from "react";
import FarmersCards from "../components/Farmers/FarmersCards";
import FarmersHero from "../components/Farmers/FarmersHero";
import FarmersFilterContextProvider from "../contexts/FarmersFilterContext";

export default function Farmers() {
  return (
    <div className="farmers page">
      <FarmersFilterContextProvider>
        <FarmersHero />
        <FarmersCards />
      </FarmersFilterContextProvider>
    </div>
  );
}
