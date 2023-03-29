import Image from "next/image";
import React from "react";

export type ICardProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

const CardComponent: React.FC<ICardProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="flex flex-row w-full flex-1 min-w-6 mb-4 bg-white rounded-lg p-3">
      <Image priority src={imageSrc} alt="Follow us on Twitter" />
      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardComponent;
