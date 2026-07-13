import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditAttendanceModal = ({
  attendance,
  attendanceData,
  setAttendance,
  onClose,
}) => {

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    class: "",
    date: "",
    status: "Present",
  });


  useEffect(() => {
    if (attendance) {
      setFormData(attendance);
    }
  }, [attendance]);


  if (!attendance) return null;



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();


    const updatedAttendance = attendanceData.map((item) =>
      item.id === formData.id
        ? formData
        : item
    );


    setAttendance(updatedAttendance);

    onClose();
  };



  return (
    <div className="
      fixed 
      inset-0 
      bg-black/40 
      backdrop-blur-sm 
      flex 
      justify-center 
      items-center 
      z-50
      px-4
    ">


      <div className="
        w-full 
        max-w-2xl 
        bg-white/80 
        backdrop-blur-xl
        rounded-3xl 
        shadow-2xl 
        p-6 
        md:p-8
      ">


        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <h2 className="
            text-2xl 
            md:text-3xl 
            font-bold 
            text-slate-800
          ">
            Edit Attendance
          </h2>


          <button
            onClick={onClose}
            className="
              w-10 
              h-10 
              rounded-xl 
              bg-red-100 
              text-red-500 
              hover:bg-red-500 
              hover:text-white 
              transition
            "
          >
            <FaTimes className="mx-auto"/>
          </button>

        </div>




        <form
          onSubmit={handleSubmit}
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-5
          "
        >


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
              outline-none
              focus:ring-2
              focus:ring-sky-400
            "
          />



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
              outline-none
              focus:ring-2
              focus:ring-sky-400
            "
          />



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
              outline-none
              focus:ring-2
              focus:ring-sky-400
            "
          />



          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="
              p-3
              rounded-xl
              border
            "
          />



          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              p-3
              rounded-xl
              border
            "
          >
            <option>Present</option>
            <option>Absent</option>
            <option>Leave</option>
          </select>



          <div className="
            md:col-span-2 
            flex 
            justify-end 
            gap-4 
            mt-5
          ">


            <button
              type="button"
              onClick={onClose}
              className="
                px-6
                py-3
                rounded-xl
                bg-slate-200
                hover:bg-slate-300
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
                from-sky-500
                to-indigo-500
                text-white
                hover:scale-105
                transition
              "
            >
              Update Attendance
            </button>


          </div>


        </form>


      </div>


    </div>
  );
};


export default EditAttendanceModal;