import { createContext, useState, useEffect } from "react";
import teachersData from "../data/teachersData";

export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("teachers");

    return savedTeachers
      ? JSON.parse(savedTeachers)
      : teachersData;
  });

  useEffect(() => {
    localStorage.setItem(
      "teachers",
      JSON.stringify(teachers)
    );
  }, [teachers]);

  return (
    <TeacherContext.Provider
      value={{
        teachers,
        setTeachers,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherProvider;