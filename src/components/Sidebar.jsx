import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
  FaSchool,
  FaChevronLeft,
  FaChevronRight,
  FaBullhorn
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Students",
    path: "/students",
    icon: <FaUserGraduate />,
  },
  {
    title: "Teachers",
    path: "/teachers",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Attendance",
    path: "/attendance",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Fees",
    path: "/fees",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
  {
  title: "Notice",
  path: "/notice",
  icon: <FaBullhorn />,
},
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/", { replace: true });
  };

  return (
    <aside
  className={`
    ${isOpen ? "w-65" : "w-22"}
    h-[650px]
    sticky
    top-3
    left-3
    bottom-3
    bg-white/60
    backdrop-blur-xl
    border-r
    border-white/40
    shadow-2xl
    rounded-[40px]
    p-4
    transition-all
    duration-500
  `}
>
      {/* Logo */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer mb-12"
      >
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center shadow-lg">
            <FaSchool className="text-white text-2xl" />
          </div>

          {isOpen && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                EduAdmin
              </h2>

              <p className="text-slate-500 text-sm">
                School Management
              </p>
            </div>
          )}
        </div>

        {isOpen ? (
          <FaChevronLeft className="text-slate-500 text-lg" />
        ) : (
          <FaChevronRight className="text-slate-500 text-lg mx-auto" />
        )}
      </div>

      {/* Menu */}
      <div className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center ${
                isOpen ? "justify-start" : "justify-center"
              } gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-xl"
                  : "text-slate-700 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-500 hover:text-white hover:shadow-xl"
              }`
            }
          >
            <span className="text-xl min-w-[24px] flex justify-center">
              {item.icon}
            </span>

            {isOpen && (
              <span className="font-medium">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;