import { createContext, useState, useEffect } from "react";
import attendanceData from "../data/attendanceData";

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState(() => {
    const savedAttendance = localStorage.getItem("attendance");

    return savedAttendance
      ? JSON.parse(savedAttendance)
      : attendanceData;
  });

  useEffect(() => {
    localStorage.setItem(
      "attendance",
      JSON.stringify(attendance)
    );
  }, [attendance]);

  return (
    <AttendanceContext.Provider
      value={{ attendance, setAttendance }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};