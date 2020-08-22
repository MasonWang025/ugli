import React from "react";
import FarmersFilter from "./FarmersFilter";

export default function FarmersHero({ originalCards, setFarmerCards }) {
  return (
    <div className="hero">
      <div className="container">
        <h1>Restaurant Catalog</h1>
        <h2>Search for Restaurants</h2>
        <FarmersFilter
          originalCards={originalCards}
          setFarmerCards={setFarmerCards}
        />
      </div>
    </div>
  );
}
