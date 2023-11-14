import React from "react";
import { CardData } from "../../Data/CardsData";
import Card from "./Card";
const CardLayout = () => {
  return (
    <div>
      {CardData.map((card) => (
        <Card
          id={card.id}
          name={card.name}
          picture={card.picture}
          descriptionOne={card.descriptionOne}
          descriptionTwo={card.descriptionTwo}
          playerAmount={card.playerAmount}
          averageTime={card.averageTime}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CardLayout;
