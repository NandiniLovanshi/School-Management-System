import { useState } from "react";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaUserShield,
    FaEdit,
} from "react-icons/fa";


const AdminProfile = () => {


    const [isEdit, setIsEdit] = useState(false);


    const [admin, setAdmin] = useState(() => {

        const savedAdmin = localStorage.getItem("admin");

        return savedAdmin
            ? JSON.parse(savedAdmin)
            : {
                name: "Nandini",
                email: "nandini@gmail.com",
                phone: "9876543210",
                role: "Administrator",
                image: "https://i.pravatar.cc/200?img=12"
            };

    });





    const handleChange = (e) => {

        setAdmin({

            ...admin,

            [e.target.name]: e.target.value

        });

    };


    const handleSave = () => {


        localStorage.setItem(
            "admin",
            JSON.stringify(admin)
        );


        window.dispatchEvent(
            new Event("adminUpdated")
        );


        setIsEdit(false);

    };








    return (

        <div className="
    bg-white/60
    backdrop-blur-xl
    rounded-3xl
    shadow-xl
    p-8
    ">


            <div className="flex justify-between items-center mb-8">


                <h2 className="text-3xl font-bold text-slate-800">
                    Admin Profile
                </h2>


                <button

                    onClick={() => setIsEdit(!isEdit)}

                    className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-sky-500
          text-white
          hover:bg-sky-600
          "

                >

                    <FaEdit />

                    {isEdit ? "Cancel" : "Edit"}

                </button>


            </div>







            <div className="flex flex-col md:flex-row gap-10 items-center">



                <img

                    src={admin.image}

                    alt="Admin"

                    className="
          w-40
          h-40
          rounded-full
          shadow-lg
          "

                />







                <div className="space-y-5 w-full">



                    {/* Name */}

                    <div className="flex items-center gap-3">

                        <FaUser className="text-sky-500" />


                        {
                            isEdit ?

                                <input

                                    name="name"

                                    value={admin.name}

                                    onChange={handleChange}

                                    className="border p-2 rounded-xl w-full"

                                />

                                :

                                <p>
                                    <b>Name:</b> {admin.name}
                                </p>

                        }


                    </div>








                    {/* Email */}

                    <div className="flex items-center gap-3">

                        <FaEnvelope className="text-sky-500" />


                        {
                            isEdit ?

                                <input

                                    name="email"

                                    value={admin.email}

                                    onChange={handleChange}

                                    className="border p-2 rounded-xl w-full"

                                />

                                :

                                <p>
                                    <b>Email:</b> {admin.email}
                                </p>

                        }


                    </div>








                    {/* Phone */}

                    <div className="flex items-center gap-3">

                        <FaPhone className="text-sky-500" />


                        {
                            isEdit ?

                                <input

                                    name="phone"

                                    value={admin.phone}

                                    onChange={handleChange}

                                    className="border p-2 rounded-xl w-full"

                                />

                                :

                                <p>
                                    <b>Phone:</b> {admin.phone}
                                </p>

                        }


                    </div>







                    {/* Role */}

                    <div className="flex items-center gap-3">

                        <FaUserShield className="text-sky-500" />


                        <p>
                            <b>Role:</b> {admin.role}
                        </p>


                    </div>



                </div>


            </div>






            {
                isEdit && (

                    <button

                        onClick={handleSave}

                        className="
            mt-8
            px-8
            py-3
            rounded-xl
            bg-green-500
            text-white
            hover:bg-green-600
            "

                    >

                        Save Changes

                    </button>

                )
            }



        </div>

    );

};


export default AdminProfile;