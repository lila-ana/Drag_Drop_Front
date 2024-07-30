"use client";

import React, { ReactNode, useState } from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { SidebarProps } from "@/types/sidebarProps";

const { Header, Content, Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({
  renderContent,
  headerMenuItems,
  sidebarMenuItems,
  getBreadcrumbItems,
}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState<string>("");
  const [breadcrumbItems, setBreadcrumbItems] = useState<ReactNode[]>([]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedKey(e.key);
    setBreadcrumbItems(getBreadcrumbItems(e.key));
  };
  return (
    <Layout className="font-poppins">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={headerMenuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={sidebarMenuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems?.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent(selectedKey)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
