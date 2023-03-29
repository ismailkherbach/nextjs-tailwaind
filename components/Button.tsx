import React from "react";

type IProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  text?: string;
  icon?: JSX.Element;
};

const Button = ({ text, icon, onClick }: IProps) => {
  return (
    <div
      className="flex flex-row justify-between items-center text-sm h-10 w-32 bg-white px-2 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {text}
      {icon}
    </div>
  );
};

export default Button;
