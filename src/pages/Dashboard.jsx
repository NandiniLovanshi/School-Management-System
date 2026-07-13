import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { TeacherContext } from "../context/TeacherContext";
import { AttendanceContext } from "../context/AttendanceContext";
import { FeesContext } from "../context/FeesContext";

import DashboardCard from "../components/DashboardCard";
import QuickActions from "../components/QuickActions";
import LatestNotices from "../components/LatestNotices";



import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

const Dashboard = () => {
  const { students } = useContext(StudentContext);
  const { teachers } = useContext(TeacherContext);
  const { attendance } = useContext(AttendanceContext);
  const { fees } = useContext(FeesContext);

  const totalRevenue = fees.reduce(
    (total, fee) => total + (parseFloat(fee.amount) || 0),
    0
  );

  return (
    <div className="space-y-6 sm:space-y-8 pb-6">

      {/* Heading */}
      <div>
        {/* <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Dashboard
        </h1> */}

        {/* <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Welcome back 👋 Here's what's happening today.
        </p> */}
      </div>

      {/* Stats Cards */}
      <div
        className="
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-4
  gap-4
  sm:gap-6
"
      >
        <DashboardCard
          title="Students"
          value={students.length}
          icon={<FaUserGraduate />}
          color="from-sky-400 to-blue-500"
        />

        <DashboardCard
          title="Teachers"
          value={teachers.length}
          icon={<FaChalkboardTeacher />}
          color="from-violet-400 to-indigo-500"
        />

        <DashboardCard
          title="Attendance"
          value={attendance.length}
          icon={<FaClipboardCheck />}
          color="from-emerald-400 to-green-500"
        />

        <DashboardCard
        
          title="Total Revenue"
          value={`₹${totalRevenue}`}
          icon={<FaMoneyBillWave />}
          color="from-pink-400 to-rose-500"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />
      



      {/* Latest Notices */}
      <LatestNotices />
    </div>
  );
};

export default Dashboard;