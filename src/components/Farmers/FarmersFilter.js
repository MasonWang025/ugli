import React from "react";

export default function FarmersFilter({ originalCards, setFarmerCards }) {
  return (
    <div div="filter">
      <input
        type="text"
        onChange={(e) => {
          filterByIngredients(
            e.target.value.toLowerCase().trim(),
            originalCards,
            setFarmerCards
          );
        }}
      />
    </div>
  );
}

function filterByIngredients(filterText, originalCards, setFarmerCards) {
  setFarmerCards(
    originalCards.filter((card) => {
      const ingredients = Object.keys(card.ingredients);
      for (let i = 0; i < ingredients.length; i++)
        if (ingredients[i].includes(filterText)) return true;
      return false;
    })
  );
}
