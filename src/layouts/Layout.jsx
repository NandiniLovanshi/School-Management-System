// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right Side */}
//       <div className="flex-1 p-6">
//         {/* Navbar */}
//         <Navbar />

//         {/* Pages */}
//         <div className="mt-6">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// const Layout = () => {
//   return (
//     <div className="h-screen flex bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 overflow-hidden">

//       {/* Fixed Sidebar */}
//       <div className="h-screen flex-shrink-0">
//         <Sidebar />
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 flex flex-col h-screen overflow-hidden">

//         {/* Fixed Navbar */}
//         <div className="sticky top-0 z-50 px-6 pt-6 bg-transparent">
//           <Navbar />
//         </div>

//         {/* Scrollable Content */}
//         <main className="flex-1 overflow-y-auto px-6 pb-6">
//           <Outlet />
//         </main>

//       </div>

//     </div>
//   );
// };

// export default Layout;
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      bg-gradient-to-br
      from-sky-100
      via-indigo-50
      to-pink-100
      overflow-hidden
      "
    >

      {/* Sidebar */}

      <div
        className="
        h-screen
        flex-shrink-0
        p-2
        sm:p-3
        lg:p-4
        "
      >
        <Sidebar />
      </div>

      {/* Right Side */}

      <div
        className="
        flex-1
        flex
        flex-col
        min-h-screen
        overflow-hidden
        "
      >

        {/* Navbar */}

        <div
          className="
          sticky
          top-0
          z-50
          px-2
          sm:px-3
          md:px-4
          lg:px-6
          pt-2
          sm:pt-3
          lg:pt-6
          bg-transparent
          "
        >
          <Navbar />
        </div>
                {/* Scrollable Content */}

        <main
          className="
            flex-1
            overflow-y-auto
            overflow-x-hidden
            px-2
            sm:px-3
            md:px-4
            lg:px-6
            pb-3
            sm:pb-4
            lg:pb-6
          "
        >
          <div
            className="
              w-full
              max-w-full
              mx-auto
            "
          >
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
};

export default Layout;
