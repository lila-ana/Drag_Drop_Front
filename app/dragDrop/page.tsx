"use client";

import React from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Sidebar from "@/Layout/sidebar";
import Default from "@/pages/sidebar/default";

const headerMenuItems: MenuProps["items"] = [
  "Your Work",
  "Projects",
  "Filter",
  "Dashboards",
  "Teams",
  "Apps",
].map((key) => ({
  key,
  label: `${key}`,
}));

const sidebarChildren: MenuProps["items"] = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    label: "User",
    className: "font-poppins",
    children: [
      { key: "1", label: "Profile" },
      { key: "2", label: "Settings" },
    ],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    label: "Devices",
    className: "font-poppins",
    children: [
      { key: "3", label: "Laptop" },
      { key: "4", label: "Phone" },
    ],
  },
];

const getBreadcrumbItems = (key: string) => {
  switch (key) {
    case "1":
      return ["Home", "User", "Profile"];
    case "2":
      return ["Home", "User", "Settings"];
    case "3":
      return ["Home", "Devices", "Laptop"];
    case "4":
      return ["Home", "Devices", "Phone"];
    default:
      return ["Home"];
  }
};

const renderContent = (key: string) => {
  switch (key) {
    case "1":
      return <div>Profile Content</div>;
    case "2":
      return <div>Settings Content</div>;
    case "3":
      return <div>Laptop Content</div>;
    case "4":
      return <div>Phone Content</div>;
    default:
      return (
        <div>
          <Default />
        </div>
      );
  }
};

const page = () => {
  return (
    <Sidebar
      headerMenuItems={headerMenuItems}
      sidebarMenuItems={sidebarChildren}
      getBreadcrumbItems={getBreadcrumbItems}
      renderContent={renderContent}
    />
  );
};

export default page;
