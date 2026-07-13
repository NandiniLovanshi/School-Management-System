import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudentProvider from "./context/StudentContext";
import TeacherProvider from "./context/TeacherContext";
import { AttendanceProvider } from "./context/AttendanceContext";
import { FeesProvider } from "./context/FeesContext";
import { SchoolProvider } from "./context/SchoolContext";
import NoticeProvider from "./context/NoticeContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <TeacherProvider>
      <AttendanceProvider>
      <FeesProvider>
      <SchoolProvider>
      <NoticeProvider>
      <App />
      </NoticeProvider>
      </SchoolProvider>
      </FeesProvider>
      </AttendanceProvider>
      </TeacherProvider>
    </StudentProvider>
  </StrictMode>
);