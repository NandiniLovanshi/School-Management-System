
import { FaTimes } from "react-icons/fa";

const ViewTeacherModal = ({ teacher, onClose }) => {
  if (!teacher) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50

      flex
      items-center
      justify-center

      bg-black/50
      backdrop-blur-sm

      p-3
      sm:p-5
      "
    >
      <div
        className="
        relative

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

        p-5
        sm:p-8
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
          absolute
          top-5
          right-5

          w-10
          h-10

          rounded-xl

          bg-red-100
          text-red-500

          flex
          items-center
          justify-center

          transition-all
          duration-300

          hover:bg-red-500
          hover:text-white
          hover:rotate-90
          "
        >
          <FaTimes />
        </button>

        {/* Heading */}

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800">
          Teacher Details
        </h2>

        {/* Profile */}

        <div className="flex flex-col items-center mt-8">
          <img
            src={`https://i.pravatar.cc/150?img=${teacher.id + 20}`}
            alt={teacher.name}
            className="
            w-24
            h-24
            sm:w-28
            sm:h-28

            rounded-full

            border-4
            border-violet-400

            shadow-xl
            "
          />

          <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-800">
            {teacher.name}
          </h3>

          <p className="text-slate-500">
            Teacher ID : {teacher.teacherId}
          </p>
        </div>

        {/* Details */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Subject
            </p>

            <p className="font-semibold mt-1">
              {teacher.subject}
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Experience
            </p>

            <p className="font-semibold mt-1">
              {teacher.experience}
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-semibold break-all mt-1">
              {teacher.email}
            </p>
          </div>

          <div className="bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="font-semibold mt-1">
              {teacher.phone}
            </p>
          </div>

          <div className="md:col-span-2 bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Address
            </p>

            <p className="font-semibold mt-1">
              {teacher.address}
            </p>
          </div>

          <div className="md:col-span-2 bg-slate-100 rounded-2xl p-4">
            <p className="text-sm text-slate-500">
              Status
            </p>

            <span
              className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold ${
                teacher.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {teacher.status}
            </span>
          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="
            w-full
            sm:w-auto

            px-8
            py-3

            rounded-2xl

            bg-gradient-to-r
            from-violet-500
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
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewTeacherModal;
