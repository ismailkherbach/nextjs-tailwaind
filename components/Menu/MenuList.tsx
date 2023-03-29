import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavItem } from "../Layout/Sidebar";

type IProps = {
  navItems: NavItem[];
};

const MenuList = ({ navItems }: IProps) => {
  return (
    <ul className="py-2 flex flex-col gap-2">
      {navItems.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <li
              className={`${
                item.active ? "text-indigo-600" : "text-grey"
              } flex gap-4 items-center rounded-md p-2 mx-2 `}
            >
              <Image src={item.icon} alt="icon" /> {item.label}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuList;
