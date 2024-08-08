import React, { useContext } from "react";
import { IClass, IStudent, ITeacher } from "../Types";

export const RouteContext = React.createContext({
	activePage: "Dashboard",
	setActivePage: (value: string) => {},
});

export const useRouteContext = () => {
	return useContext(RouteContext);
};

export const RouteData = React.createContext<{
	classes: IClass[];
	setClasses: (classes: IClass[]) => void;
	teachers: ITeacher[];
	setTeachers: (teachers: ITeacher[]) => void;
	students: IStudent[];
	setStudents: (students: IStudent[]) => void;
}>({
	classes: [],
	setClasses: (classes: IClass[]) => {},
	teachers: [],
	setTeachers: (teachers: ITeacher[]) => {},
	students: [],
	setStudents: (students: IStudent[]) => {},
});

export const RouteClassesData = React.createContext({
	classes: [],
	setClasses: (classes: IClass[]) => {},
});

export const useRouteData = () => {
	return useContext(RouteData);
};
