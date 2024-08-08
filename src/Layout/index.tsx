import React, { useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout as AntdLayout, Menu, theme } from "antd";
import { useRouteContext } from "../Context";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaTableList } from "react-icons/fa6";

const { Header, Sider, Content } = AntdLayout;

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { activePage, setActivePage } = useRouteContext();

	return (
		<AntdLayout className="h-screen overflow-hidden">
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
							icon: <LuLayoutDashboard />,
							label: "Dashboard",
						},
						{
							key: "Classes",
							icon: <IoIosPeople />,
							label: "Classes",
						},
						{
							key: "Teachers",
							icon: <PiChalkboardTeacherLight />,
							label: "Teachers",
						},
						{
							key: "Students",
							icon: <PiStudent />,
							label: "Students",
						},
						{
							key: "Parents",
							icon: <IoPeople />,
							label: "Parents",
						},
						{
							key: "Marks",
							icon: <BsFillJournalBookmarkFill />,
							label: "Marks",
						},
						{
							key: "Timetable",
							icon: <FaTableList />,
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
						overflowY: "auto",
					}}
				>
					{children}
				</Content>
			</AntdLayout>
		</AntdLayout>
	);
};

export default Layout;
