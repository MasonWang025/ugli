import React, { useContext } from "react";
import { FarmersFilterContext } from "../../contexts/FarmersFilterContext";

export default function FarmersCards() {
  const { farmerCards } = useContext(FarmersFilterContext);

  return (
    <div>
      cards
      {farmerCards && farmerCards.map((card) => <div>{card.name}</div>)}
    </div>
  );
}
