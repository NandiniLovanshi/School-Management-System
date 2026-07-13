import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const MarkAttendanceModal = ({
  isOpen,
  onClose,
  attendance,
  setAttendance,
}) => {

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    class: "",
    date: "",
    status: "Present",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newAttendance = {
      id: Date.now(),
      ...formData,
    };


    setAttendance([
      ...attendance,
      newAttendance,
    ]);


    setFormData({
      name: "",
      rollNo: "",
      class: "",
      date: "",
      status: "Present",
    });


    onClose();
  };


  if (!isOpen) return null;


  return (
    <div
      className="
      fixed
      inset-0

      bg-black/40
      backdrop-blur-sm

      flex
      items-center
      justify-center

      z-50

      p-4
      "
    >

      <div
        className="
        w-full
        max-w-2xl

        max-h-[90vh]
        overflow-y-auto

        bg-white/80
        backdrop-blur-xl

        border
        border-white/50

        rounded-2xl
        sm:rounded-3xl

        shadow-2xl

        p-5
        sm:p-8
        "
      >

        {/* Header */}

        <div
          className="
          flex
          justify-between
          items-center

          mb-6
          "
        >

          <h2
            className="
            text-2xl
            sm:text-3xl

            font-bold

            text-slate-800
            "
          >
            Mark Attendance
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

            transition

            flex
            items-center
            justify-center
            "
          >
            <FaTimes />
          </button>

        </div>



        <form
          onSubmit={handleSubmit}
          className="
          grid

          grid-cols-1
          sm:grid-cols-2

          gap-4
          sm:gap-5
          "
        >


          {/* Name */}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="
            p-3

            rounded-xl

            border
            border-slate-200

            outline-none

            bg-white

            focus:ring-4
            focus:ring-green-200
            "
            required
          />


          {/* Roll No */}

          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Roll Number"
            className="
            p-3

            rounded-xl

            border
            border-slate-200

            outline-none

            bg-white

            focus:ring-4
            focus:ring-green-200
            "
            required
          />



          {/* Class */}

          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder="Class"
            className="
            p-3

            rounded-xl

            border
            border-slate-200

            outline-none

            bg-white

            focus:ring-4
            focus:ring-green-200
            "
            required
          />



          {/* Date */}

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="
            p-3

            rounded-xl

            border
            border-slate-200

            outline-none

            bg-white

            focus:ring-4
            focus:ring-green-200
            "
            required
          />



          {/* Status */}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
            p-3

            rounded-xl

            border
            border-slate-200

            outline-none

            bg-white

            focus:ring-4
            focus:ring-green-200

            "
          >

            <option value="Present">
              Present
            </option>

            <option value="Absent">
              Absent
            </option>

            <option value="Leave">
              Leave
            </option>

          </select>



          {/* Buttons */}

          <div
            className="
            sm:col-span-2

            flex
            flex-col
            sm:flex-row

            justify-end

            gap-3

            mt-4
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
              px-6
              py-3

              rounded-xl

              bg-slate-200

              hover:bg-slate-300

              transition
              "
            >
              Cancel
            </button>


            <button
              type="submit"
              className="
              px-6
              py-3

              rounded-xl

              bg-gradient-to-r
              from-green-500
              to-emerald-500

              text-white

              font-semibold

              shadow-lg

              hover:scale-105

              transition
              "
            >
              Save Attendance
            </button>


          </div>


        </form>


      </div>

    </div>
  );
};


export default MarkAttendanceModal;