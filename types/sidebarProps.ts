import { MenuProps } from "antd";
import { ReactNode } from "react";

export interface SidebarProps {
  headerMenuItems: MenuProps["items"];
  sidebarMenuItems: MenuProps["items"];
  getBreadcrumbItems: (key: string) => ReactNode[];
  renderContent: (key: string) => ReactNode;
}
