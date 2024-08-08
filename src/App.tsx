import React, { useState } from "react";
import "./App.css";
import { IClass, IStudent, ITeacher } from "./Types";
import { Teachers } from "./Pages/Teachers";
import { Students } from "./Pages/Students";
import { Classes } from "./Pages/Classes";
import { Parents } from "./Pages/Parents";
import { Timetable } from "./Pages/Timetable";
import { Marks } from "./Pages/Marks";
import { ClassData, StudentData, TeacherData } from "./Data";
import { RouteContext, RouteData } from "./Context";
import { Dashboard } from "./Pages/Dashboard";
import Layout from "./Layout";
import { ConfigProvider } from "antd";

const pages: Record<string, React.ReactNode> = {
	Dashboard: <Dashboard />,
	Teachers: <Teachers />,
	Students: <Students />,
	Classes: <Classes />,
	Parents: <Parents />,
	Timetable: <Timetable />,
	Marks: <Marks />,
};

function App() {
	const [classes, setClasses] = useState<IClass[]>(ClassData);
	const [teachers, setTeachers] = useState<ITeacher[]>(TeacherData);
	const [students, setStudents] = useState<IStudent[]>(StudentData);
	const [activePage, setActivePage] = useState("Dashboard");

	return (
		<ConfigProvider
			theme={{ token: { colorPrimary: "#00b96b" } }}
		>
			<RouteContext.Provider
				value={{ activePage, setActivePage }}
			>
				<RouteData.Provider
					value={{
						classes,
						setClasses,
						teachers,
						setTeachers,
						students,
						setStudents,
					}}
				>
					<Layout>{pages[activePage]}</Layout>
				</RouteData.Provider>
			</RouteContext.Provider>
		</ConfigProvider>
	);
}

export default App;
