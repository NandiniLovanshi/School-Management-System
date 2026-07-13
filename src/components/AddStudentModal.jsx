import { useState } from "react";
import { FaTimes } from "react-icons/fa";


const AddStudentModal = ({
  isOpen,
  onClose,
  students,
  setStudents
}) => {


  const [student, setStudent] = useState({

    name: "",
    rollNo: "",
    email: "",
    phone: "",
    class: "",
    status: "Active",
    address: ""

  });



  if (!isOpen) return null;



  const handleChange = (e) => {

    setStudent({

      ...student,
      [e.target.name]: e.target.value

    });

  };




  const handleSubmit = (e) => {

    e.preventDefault();


    const newStudent = {

      id: students.length + 1,

      ...student

    };


    setStudents([

      ...students,

      newStudent

    ]);



    setStudent({

      name: "",
      rollNo: "",
      email: "",
      phone: "",
      class: "",
      status: "Active",
      address: ""

    });



    onClose();

  };




  return (

    <div
      className="
  fixed
  inset-0
  z-50

  bg-black/50
  backdrop-blur-sm

  flex
  items-center
  justify-center

  p-3
  sm:p-5
  "
    >


      <div
        className="
  w-full
  max-w-3xl

  max-h-[90vh]
  overflow-y-auto

  bg-white/80
  backdrop-blur-xl

  rounded-2xl
  sm:rounded-3xl

  border
  border-white/50

  shadow-2xl

  p-4
  sm:p-6
  lg:p-8
  "
      >


        <div className="flex items-center justify-between mb-6">


          <h2
            className="
  text-2xl
  sm:text-3xl

  font-bold
  text-slate-800
  "
          >
            Add New Student
          </h2>


          <button
            onClick={onClose}
            className="
w-9
h-9

sm:w-10
sm:h-10

rounded-xl

bg-red-100
text-red-500

hover:bg-red-500
hover:text-white

transition-all
duration-300
hover:rotate-90
"
          >

            <FaTimes className="mx-auto" />

          </button>


        </div>




        <form
          onSubmit={handleSubmit}
          className="
grid

grid-cols-1
md:grid-cols-2

gap-4
sm:gap-5
"
        >



          <input
            name="name"
            value={student.name}
            onChange={handleChange}
            type="text"
            placeholder="Student Name"
            className="
px-4
py-3

rounded-2xl

border
border-slate-300

bg-white

text-sm
sm:text-base

outline-none

transition-all
duration-300

focus:ring-4
focus:ring-sky-200
focus:border-sky-400
"
          />



          <input
            name="rollNo"
            value={student.rollNo}
            onChange={handleChange}
            type="text"
            placeholder="Roll Number"
            className="
px-4
py-3

rounded-2xl

border
border-slate-300

bg-white

text-sm
sm:text-base

outline-none

transition-all
duration-300

focus:ring-4
focus:ring-sky-200
focus:border-sky-400
"
          />



          <input
            name="email"
            value={student.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="
px-4
py-3

rounded-2xl

border
border-slate-300

bg-white

text-sm
sm:text-base

outline-none

transition-all
duration-300

focus:ring-4
focus:ring-sky-200
focus:border-sky-400
"
          />



          <input
            name="phone"
            value={student.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="
px-4
py-3

rounded-2xl

border
border-slate-300

bg-white

text-sm
sm:text-base

outline-none

transition-all
duration-300

focus:ring-4
focus:ring-sky-200
focus:border-sky-400
"
          />



          <select
            name="class"
            value={student.class}
            onChange={handleChange}
            className="p-3 rounded-2xl border border-slate-300">

            <option value="">
              Select Class
            </option>

            <option>
              6th
            </option>

            <option>
              7th
            </option>

            <option>
              8th
            </option>

            <option>
              9th
            </option>

            <option>
              10th
            </option>

            <option>
              11th
            </option>

            <option>
              12th
            </option>


          </select>



          <select
            name="status"
            value={student.status}
            onChange={handleChange}
            className="p-3 rounded-2xl border border-slate-300">


            <option>
              Active
            </option>


            <option>
              Inactive
            </option>


          </select>




          <textarea
            name="address"
            value={student.address}
            onChange={handleChange}
            rows="3"
            placeholder="Address"
            className="md:col-span-2 p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-sky-400"
          />




          <div className="md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-4">


            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 w-full sm:w-auto font-medium rounded-2xl bg-slate-200 hover:bg-slate-300">

              Cancel

            </button>



            <button
              type="submit"
              className="
w-full
sm:w-auto

px-6
py-3

rounded-2xl

bg-gradient-to-r
from-sky-500
to-indigo-500

text-white
font-semibold

shadow-lg

transition-all
duration-300

hover:scale-105

active:scale-95
"
            >

              Save Student

            </button>



          </div>


        </form>


      </div>


    </div>

  );

};


export default AddStudentModal;

