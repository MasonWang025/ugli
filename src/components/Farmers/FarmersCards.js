import React, { useContext } from "react";
import { FarmersFilterContext } from "../../contexts/FarmersFilterContext";
import FarmerCard from "./FarmersCard";

export default function FarmersCards() {
  const { farmerCards } = useContext(FarmersFilterContext);

  return (
    <div>
      cards
      {farmerCards &&
        farmerCards.map((card) => (
          <FarmerCard name={card.name} city={card.city} />
        ))}
    </div>
  );
}
