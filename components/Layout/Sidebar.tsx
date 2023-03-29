import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "../Menu/Menu";
import { icons } from "../../assets/images";
import MenuList from "../Menu/MenuList";

export type NavItem = {
  label: string;
  href: string;
  icon: string;
  active: boolean;
};
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ navItems = Menu, setOpen }: Props) => {
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true,
        "bg-white text-zinc-50": true,
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true,
      })}
    >
      <nav className="md:sticky top-12">
        <div className="flex items-center justify-center mb-8">
          <Image src={icons.logo} alt="logo" height={42} />
        </div>
        <MenuList navItems={navItems} />
      </nav>
      <div className="p-4">
        <Image src={icons.illustration} alt="upgrade" className="mb-7" />
        <div className="flex gap-4 items-center">
          <Image src={icons.profile} alt="profile image" />
          <div className="flex flex-col">
            <span className="text-black my-0">Easin Arafat</span>
            <Link href="/" className="text-grey text-sm">
              Free Account
            </Link>
          </div>
          <Image src={icons.logout} alt="profile image" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
