import { FaTimes } from "react-icons/fa";

const ViewStudentModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition"
        >
          <FaTimes className="mx-auto" />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Student Details
        </h2>

        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={`https://i.pravatar.cc/150?img=${student.id + 10}`}
            alt={student.name}
            className="w-28 h-28 rounded-full border-4 border-sky-400 shadow-lg"
          />

          <h3 className="mt-4 text-2xl font-semibold">
            {student.name}
          </h3>

          <p className="text-slate-500">
            Roll No : {student.rollNo}
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-sm text-slate-500">Class</p>
            <p className="font-semibold">{student.class}</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-semibold break-all">
              {student.email}
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-sm text-slate-500">Phone</p>
            <p className="font-semibold">
              {student.phone}
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-sm text-slate-500">Status</p>

            <span
              className={`inline-block mt-1 px-3 py-1 rounded-full text-sm ${
                student.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {student.status}
            </span>
          </div>

        </div>

        {/* Close Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:scale-105 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewStudentModal;