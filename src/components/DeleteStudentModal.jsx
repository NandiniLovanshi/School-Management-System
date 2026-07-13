import { FaTrash, FaTimes } from "react-icons/fa";

const DeleteStudentModal = ({
  student,
  students,
  setStudents,
  onClose,
}) => {
  if (!student) return null;

  const handleDelete = () => {
    const updatedStudents = students.filter(
      (item) => item.id !== student.id
    );

    setStudents(updatedStudents);
    onClose();
  };

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

      p-4
      "
    >
      <div
        className="
        relative

        w-full
        max-w-md

        bg-white/80
        backdrop-blur-xl

        border
        border-white/50

        rounded-2xl
        sm:rounded-3xl

        shadow-2xl

        p-5
        sm:p-7
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4

          w-10
          h-10

          rounded-xl

          bg-slate-100
          text-slate-500

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

        {/* Icon */}

        <div className="flex justify-center">
          <div
            className="
            w-20
            h-20

            rounded-full

            bg-red-100

            flex
            items-center
            justify-center

            shadow-lg
            "
          >
            <FaTrash className="text-red-600 text-3xl" />
          </div>
        </div>

        {/* Heading */}

        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Delete Student
          </h2>

          <p className="mt-2 text-slate-500 text-sm">
            This action is permanent.
          </p>
        </div>

        {/* Student */}

        <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-center">
          <h3 className="text-lg font-semibold text-slate-800">
            {student.name}
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Roll No : {student.rollNo}
          </p>
        </div>

        {/* Warning */}

        <div
          className="
          mt-5

          rounded-2xl

          border
          border-red-200

          bg-red-50

          p-4

          text-center
          "
        >
          <p className="text-red-600 font-medium">
            Are you sure you want to delete this student?
          </p>

          <p className="text-red-500 text-sm mt-2">
            This action cannot be undone.
          </p>
        </div>

        {/* Buttons */}

        <div
          className="
          mt-7

          flex

          flex-col-reverse
          sm:flex-row

          gap-3

          justify-center
          "
        >
          <button
            onClick={onClose}
            className="
            w-full
            sm:w-auto

            px-6
            py-3

            rounded-2xl

            bg-slate-200

            font-medium

            transition-all
            duration-300

            hover:bg-slate-300
            "
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="
            w-full
            sm:w-auto

            px-6
            py-3

            rounded-2xl

            bg-gradient-to-r
            from-red-500
            to-red-600

            text-white
            font-semibold

            shadow-lg

            transition-all
            duration-300

            hover:scale-105

            active:scale-95
            "
          >
            Delete Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudentModal;

