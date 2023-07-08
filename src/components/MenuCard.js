import React from "react";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ menuItem, rest }) => {
  const { name, imgSrc, price } = menuItem;
  const { id, name: restName } = rest;
  const navigate = useNavigate();

  return (
    <>
      <li
        onClick={() => navigate(`/restaurant/${id}`)}
        className="menu_card_container"
      >
        <div className="menu_card-img">
          <img
            src={imgSrc}
            alt={name}
            height={"150px"}
            width={"150px"}
            className="imgCover"
          />
        </div>
        <div className="menu_card-body">
          <p className="text-ellipsis">{name}</p>
          <p>Rs.{price} for two</p>
          <p className="text-ellipsis">{restName}</p>
        </div>
      </li>
    </>
  );
};

export default MenuCard;
