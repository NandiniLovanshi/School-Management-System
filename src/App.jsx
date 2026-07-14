
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./Layout/Layout";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Settings from "./pages/Settings";
import AdminProfile from "./components/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Notice from "./pages/Notice";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Login Page */}
        <Route path="/" element={<Login />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
        </Route>

        {/* Wrong URL */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
