import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeacherPanel from "./Pages/TeacherPanel";
import { IClass, IStudent, ITeacher } from "./Types";
import { classesData, studentsData, teachersData } from "./Data";

export const DataContext = React.createContext<{
  classes: IClass[];
  setClasses: (classes: IClass[]) => void;
  teachers: ITeacher[];
  setTeachers: (value: ITeacher[]) => void;
  students: IStudent[];
  setStudents: (value: IStudent[]) => void;
}>({
  classes: [],
  setClasses: (classes: IClass[]) => {},
  teachers: [],
  setTeachers: (value: ITeacher[]) => {},
  students: [],
  setStudents: (value: IStudent[]) => {},
});

export const useDataContext = () => {
  return useContext(DataContext);
};

function App() {
  const [classes, setClasses] = useState<IClass[]>(classesData);
  const [teachers, setTeachers] = useState<ITeacher[]>(teachersData);
  const [students, setStudents] = useState<IStudent[]>(studentsData);

  return (
    <DataContext.Provider
      value={{
        classes,
        setClasses,
        teachers,
        setTeachers,
        students,
        setStudents,
      }}
    >
      <TeacherPanel />
    </DataContext.Provider>
  );
}

export default App;
