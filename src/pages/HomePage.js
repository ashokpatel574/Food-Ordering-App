import React from "react";
import { useData } from "../context/DataContext";
import MenuCard from "../components/MenuCard";

const HomePage = () => {
  const {
    state: { selectedRestaurants },
    dispatch,
  } = useData();

  const cuisineSelectHandler = (type) => {
    dispatch({
      type: "selectCuisine",
      payload: type,
    });
  };

  return (
    <div className="home_container">
      <div className="home_header flex-column">
        <h3>Select Your Cuisine</h3>
        <div className="btn-container">
          <button
            className="btn cuisineBtn "
            onClick={() => cuisineSelectHandler("Italian")}
          >
            Italian
          </button>
          <button
            className="btn cuisineBtn "
            onClick={() => cuisineSelectHandler("Mexican")}
          >
            Mexican
          </button>
          <button
            className="btn cuisineBtn "
            onClick={() => cuisineSelectHandler("Chinese")}
          >
            Chinese
          </button>
          <button
            className="btn cuisineBtn "
            onClick={() => cuisineSelectHandler("Indian")}
          >
            Indian
          </button>
        </div>
      </div>

      {selectedRestaurants && (
        <div className="rest_home-container">
          <h3>Dishes by {selectedRestaurants.name}</h3>
          <ul>
            {selectedRestaurants.menu.length > 0 &&
              selectedRestaurants.menu.map((menuItem) => (
                <MenuCard
                  key={menuItem.name}
                  menuItem={menuItem}
                  rest={selectedRestaurants}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
