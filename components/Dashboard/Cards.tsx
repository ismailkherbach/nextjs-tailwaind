import React from "react";
import { cards } from "../../utils/data";
import CardComponent from "./misc/Card";

const Cards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-4">
      {cards.map((item, key) => (
        <CardComponent
          key={key}
          title={item.title}
          subtitle={item.subtitle}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
};

export default Cards;
