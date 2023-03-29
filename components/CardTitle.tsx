import React from "react";

type ICardProps = {
  title: string;
  Icon: JSX.Element;
};

const CardTitle = ({ title, Icon }: ICardProps) => {
  return (
    <div className="flex flex-row justify-between items-center mb-6">
      <h2 className="font-medium">{title}</h2>
      {Icon}
    </div>
  );
};

export default CardTitle;
