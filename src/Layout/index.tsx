import React, { useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout as AntdLayout, Menu, theme } from "antd";
import { useRouteContext } from "../Context";

const { Header, Sider, Content } = AntdLayout;

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { activePage, setActivePage } = useRouteContext();

	return (
		<AntdLayout className="h-screen">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["Dashboard"]}
					onSelect={({ key }) => {
						setActivePage(key);
					}}
					items={[
						{
							key: "Dashboard",
							icon: <UserOutlined />,
							label: "Dashboard",
						},
						{
							key: "Classes",
							icon: <VideoCameraOutlined />,
							label: "Classes",
						},
						{
							key: "Teachers",
							icon: <UploadOutlined />,
							label: "Teachers",
						},
						{
							key: "Students",
							icon: <UploadOutlined />,
							label: "Students",
						},
						{
							key: "Parents",
							icon: <UploadOutlined />,
							label: "Parents",
						},
						{
							key: "Marks",
							icon: <UploadOutlined />,
							label: "Marks",
						},
						{
							key: "Timetable",
							icon: <UploadOutlined />,
							label: "Timetable",
						},
					]}
				/>
			</Sider>
			<AntdLayout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<Button
						type="text"
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					{children}
				</Content>
			</AntdLayout>
		</AntdLayout>
	);
};

export default Layout;
