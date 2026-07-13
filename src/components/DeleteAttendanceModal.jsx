import { FaTimes, FaTrash } from "react-icons/fa";

const DeleteAttendanceModal = ({
  attendance,
  attendanceData,
  setAttendance,
  onClose,
}) => {

  if (!attendance) return null;


  const handleDelete = () => {

    const updatedAttendance =
      attendanceData.filter(
        (item) => item.id !== attendance.id
      );


    setAttendance(updatedAttendance);


    // localStorage update
    localStorage.setItem(
      "attendance",
      JSON.stringify(updatedAttendance)
    );


    onClose();
  };


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6">


        {/* Header */}
        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <FaTrash />
            Delete Attendance
          </h2>


          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <FaTimes />
          </button>

        </div>



        {/* Details */}
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this attendance record?
        </p>


        <div className="bg-gray-100 rounded-lg p-4 mb-5">

          <p>
            <b>Name:</b> {attendance.name}
          </p>


          <p>
            <b>Roll No:</b> {attendance.rollNo}
          </p>


          <p>
            <b>Class:</b> {attendance.class}
          </p>


          <p>
            <b>Date:</b> {attendance.date}
          </p>


          <p>
            <b>Status:</b> {attendance.status}
          </p>

        </div>



        {/* Buttons */}
        <div className="flex justify-end gap-3">


          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>



          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>


        </div>


      </div>


    </div>
  );
};


export default DeleteAttendanceModal;