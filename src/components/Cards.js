import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function cards() {
  return (
    <div className="cards">
      <h1>Checkout these new articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-2.jpg"
              text="Explore the buzz about honeybees - National Geographic"
              label="Science"
            />
            <CardItem
              src="/images/img-1.jpg"
              text="Save the bees - Grenpeace UK"
              label="Ecology"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="National Honey Bee Day 2021"
              label="Events"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="How has the taste of British honey changed over the past decade"
              label="Research"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;
