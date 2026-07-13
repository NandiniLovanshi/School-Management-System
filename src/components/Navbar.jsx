import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaBell,
  FaMoon,
  FaChevronDown,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");

  const [admin, setAdmin] = useState({
    name: "Nandini",
    image: "https://i.pravatar.cc/100?img=12",
  });

  useEffect(() => {
    const loadAdmin = () => {
      const savedAdmin = localStorage.getItem("admin");

      if (savedAdmin) {
        setAdmin(JSON.parse(savedAdmin));
      }
    };

    loadAdmin();

    window.addEventListener("adminUpdated", loadAdmin);

    return () => {
      window.removeEventListener(
        "adminUpdated",
        loadAdmin
      );
    };
  }, []);

  useEffect(() => {
    const savedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    setNotifications(savedNotifications);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  const handleSearch = () => {
    const value = search.trim().toLowerCase();

    switch (value) {
      case "dashboard":
      case "home":
        navigate("/dashboard");
        break;

      case "student":
      case "students":
        navigate("/students");
        break;

      case "teacher":
      case "teachers":
        navigate("/teachers");
        break;

      case "attendance":
        navigate("/attendance");
        break;

      case "fees":
      case "fee":
        navigate("/fees");
        break;

      case "notice":
      case "notices":
        navigate("/notice");
        break;

      case "settings":
      case "setting":
        navigate("/settings");
        break;

      default:
        alert("Page not found");
        return;
    }

    setSearch("");
    setShowSearch(false);
  };

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          w-full
          bg-white/70
          backdrop-blur-xl
          rounded-2xl
          lg:rounded-3xl
          shadow-xl
          border
          border-white/40
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-8
          py-3
          flex
          items-center
          justify-between
          gap-2
        "
      >

        {/* Left Side */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            md:gap-4
            lg:gap-5
            flex-shrink-0
          "
        >

          <button
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              md:w-11
              md:h-11
              lg:w-12
              lg:h-12
              rounded-xl
              lg:rounded-2xl
              bg-gradient-to-r
              from-sky-400
              to-indigo-500
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            <FaBars className="text-sm sm:text-base lg:text-lg" />
          </button>

          <h1
            className="
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              xl:text-3xl
              font-bold
              text-slate-800
              whitespace-nowrap
              truncate
            "
          >
            Dashboard
          </h1>

        </div>

        {/* Desktop Search */}
                {/* Desktop Search */}

        <div
          className="
            hidden
            lg:flex
            relative
            flex-1
            max-w-xs
            xl:max-w-sm
            2xl:max-w-md
            mx-4
          "
        >
          <input
            type="text"
            placeholder="Search Pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="
              w-full
              bg-white
              border
              border-slate-200
              rounded-2xl
              py-3
              pl-5
              pr-12
              outline-none
              focus:ring-2
              focus:ring-sky-400
              text-sm
              xl:text-base
              transition-all
            "
          />

          <FaSearch
            onClick={handleSearch}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-sky-500
              cursor-pointer
              hover:scale-110
              transition
            "
          />
        </div>

        {/* Right Side */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            md:gap-4
            flex-shrink-0
          "
        >

          {/* Mobile Search */}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="
              lg:hidden
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-xl
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-sky-500
              hover:text-white
              transition-all
            "
          >
            {showSearch ? <FaTimes /> : <FaSearch />}
          </button>

          {/* Dark Mode

          <button
            className="
              hidden
              sm:flex
              w-9
              h-9
              md:w-10
              md:h-10
              lg:w-11
              lg:h-11
              xl:w-12
              xl:h-12
              rounded-xl
              lg:rounded-2xl
              bg-white
              shadow-md
              items-center
              justify-center
              hover:bg-indigo-500
              hover:text-white
              transition-all
            "
          >
            <FaMoon className="text-sm lg:text-base" />
          </button> */}

          {/* Notification */}
                    {/* Notification */}

          <div className="relative flex-shrink-0">

            <button
              onClick={() =>
                setOpenNotification(!openNotification)
              }
              className="
                relative
                w-9
                h-9
                sm:w-10
                sm:h-10
                md:w-11
                md:h-11
                lg:w-12
                lg:h-12
                rounded-xl
                lg:rounded-2xl
                bg-white
                shadow-md
                hover:bg-sky-500
                hover:text-white
                transition-all
              "
            >
              <FaBell className="mx-auto text-sm lg:text-base" />

              {notifications.length > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    bg-red-500
                    text-white
                    text-[9px]
                    sm:text-[10px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  {notifications.length}
                </span>
              )}
            </button>

            {openNotification && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-[290px]
                  sm:w-[320px]
                  md:w-[340px]
                  max-w-[90vw]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  p-4
                  z-50
                "
              >

                <h2 className="font-bold text-base sm:text-lg mb-4">
                  Notifications
                </h2>

                {notifications.length === 0 ? (
                  <p className="text-slate-500 text-sm">
                    No Notifications
                  </p>
                ) : (
                  <div className="space-y-3 max-h-72 overflow-y-auto">

                    {notifications.map((item) => (

                      <div
                        key={item.id}
                        className="border-b border-slate-100 pb-3"
                      >

                        <h3 className="font-semibold text-sm sm:text-base">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          {item.message}
                        </p>

                        <p className="text-[11px] text-slate-400 mt-2">
                          {item.time}
                        </p>

                      </div>

                    ))}

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Profile */}

          <div className="relative flex-shrink-0">

            <div
              onClick={() => setOpenProfile(!openProfile)}
              className="
                flex
                items-center
                gap-2
                lg:gap-3
                bg-white
                rounded-xl
                lg:rounded-2xl
                px-2
                sm:px-3
                py-2
                shadow-md
                cursor-pointer
                hover:shadow-lg
                transition-all
              "
            >

              <img
                src={admin.image}
                alt="Admin"
                className="
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  lg:w-12
                  lg:h-12
                  rounded-xl
                  object-cover
                "
              />

              <div className="hidden lg:block min-w-0">

                <h3 className="font-semibold text-slate-800 text-sm xl:text-base truncate">
                  {admin.name}
                </h3>

                <p className="text-xs xl:text-sm text-slate-500">
                  Administrator
                </p>

              </div>

              <FaChevronDown className="hidden lg:block text-slate-500 text-sm" />

            </div>

            {/* Profile Dropdown */}

            {openProfile && (

              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-56
                  max-w-[90vw]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  p-3
                  z-50
                "
              >

                <button
                  onClick={() => {
                    setOpenProfile(false);
                    navigate("/admin-profile");
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    hover:bg-sky-50
                    transition
                  "
                >
                  <FaUser />
                  My Profile
                </button>

                <button
                  onClick={() => {
                    setOpenProfile(false);
                    navigate("/settings");
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    hover:bg-sky-50
                    transition
                  "
                >
                  <FaCog />
                  Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-red-500
                    hover:bg-red-50
                    transition
                  "
                >
                  <FaSignOutAlt />
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </header>
            {/* Mobile Search */}

      {showSearch && (
        <div className="lg:hidden mt-3 sm:mt-4 animate-fadeIn">

          <div className="relative">

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search Dashboard, Students..."
              className="
                w-full
                bg-white
                border
                border-slate-200
                rounded-2xl
                py-3
                sm:py-3.5
                pl-4
                sm:pl-5
                pr-12
                shadow-md
                outline-none
                text-sm
                sm:text-base
                focus:ring-2
                focus:ring-sky-400
                transition-all
              "
            />

            <FaSearch
              onClick={handleSearch}
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-sky-500
                cursor-pointer
                hover:scale-110
                transition
              "
            />

          </div>

          {/* Search Suggestions */}

          <div className="mt-3 flex flex-wrap gap-2">

            {[
              "Dashboard",
              "Students",
              "Teachers",
              "Attendance",
              "Fees",
              "Notice",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSearch(item);

                  setTimeout(() => {
                    switch (item.toLowerCase()) {
                      case "dashboard":
                        navigate("/dashboard");
                        break;

                      case "students":
                        navigate("/students");
                        break;

                      case "teachers":
                        navigate("/teachers");
                        break;

                      case "attendance":
                        navigate("/attendance");
                        break;

                      case "fees":
                        navigate("/fees");
                        break;

                      case "notice":
                        navigate("/notice");
                        break;

                      case "settings":
                        navigate("/settings");
                        break;

                      default:
                        break;
                    }

                    setShowSearch(false);
                  }, 100);
                }}
                className="
                  px-3
                  sm:px-4
                  py-2
                  rounded-xl
                  bg-sky-100
                  text-sky-700
                  text-xs
                  sm:text-sm
                  font-medium
                  hover:bg-sky-500
                  hover:text-white
                  transition-all
                "
              >
                {item}
              </button>
            ))}

          </div>

        </div>
      )}

    </>
  );
};

export default Navbar;