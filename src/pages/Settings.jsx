import { useState } from "react";

import SchoolProfile from "../components/SchoolProfile";
import AdminProfile from "../components/AdminProfile";
import ChangePassword from "../components/ChangePassword";
import NotificationSettings from "../components/NotificationSettings";

import {
  FaSchool,
  FaUser,
  FaLock,
  FaBell
} from "react-icons/fa";


const Settings = () => {


  const [activeSetting, setActiveSetting] = useState("School Profile");



  const settings = [

    {
      title: "School Profile",
      desc: "Update school information",
      icon: <FaSchool />
    },


    {
      title: "Admin Profile",
      desc: "Manage admin details",
      icon: <FaUser />
    },


    {
      title: "Change Password",
      desc: "Update account password",
      icon: <FaLock />
    },


    {
      title: "Notifications",
      desc: "Manage alerts",
      icon: <FaBell />
    }


  ];




  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 p-8">


      <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8">


        {/* Header */}

        <h1 className="text-2xl font-bold text-slate-800">
          Settings
        </h1>


        {/* <p className="text-slate-500 mt-2">
          Manage school settings and account preferences.
        </p> */}





        {/* Setting Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


          {
            settings.map((item, index) => (

              <div

                key={index}

                onClick={() => setActiveSetting(item.title)}

                className={`
                  bg-white 
                  rounded-3xl 
                  shadow-lg 
                  p-6 
                  cursor-pointer 
                  transition 
                  hover:scale-105

                  ${
                    activeSetting === item.title
                    ? "ring-2 ring-sky-400"
                    : ""
                  }

                `}

              >



                <div className="text-4xl text-sky-500 mb-4">

                  {item.icon}

                </div>




                <h2 className="text-xl font-bold text-slate-800">

                  {item.title}

                </h2>



                <p className="text-slate-500 mt-2">

                  {item.desc}

                </p>



              </div>


            ))

          }



        </div>





        {/* Components Render */}


        <div className="mt-8">


          {
            activeSetting === "School Profile" && (

              <SchoolProfile />

            )
          }





          {
            activeSetting === "Admin Profile" && (

              <AdminProfile />

            )
          }





          {
            activeSetting === "Change Password" && (

              <ChangePassword />

            )
          }





          {
            activeSetting === "Notifications" && (

              <NotificationSettings />

            )
          }



        </div>



      </div>


    </div>


  );

};


export default Settings;