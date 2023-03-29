import React from "react";
import { NavItem } from "../Layout/Sidebar";
import { icons } from "../../assets/images";

export const Menu: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: icons.dashboard,
    active: true,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: icons.analytics,
    active: false,
  },
];
