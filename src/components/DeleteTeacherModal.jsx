
import { FaTrash, FaTimes } from "react-icons/fa";

const DeleteTeacherModal = ({
  teacher,
  teachers,
  setTeachers,
  onClose,
}) => {
  if (!teacher) return null;

  const handleDelete = () => {
    const updatedTeachers = teachers.filter(
      (item) => item.id !== teacher.id
    );

    setTeachers(updatedTeachers);
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
        sm:p-8
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
            Delete Teacher
          </h2>

          <button
            onClick={onClose}
            className="
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
        </div>

        {/* Icon */}

        <div className="flex justify-center mb-6">
          <div
            className="
            w-20
            h-20

            rounded-full

            bg-red-100

            flex
            items-center
            justify-center
            "
          >
            <FaTrash className="text-4xl text-red-500" />
          </div>
        </div>

        {/* Content */}

        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800">
            {teacher.name}
          </h3>

          <p className="text-slate-500 mt-3 leading-relaxed">
            Are you sure you want to delete this teacher?
          </p>

          <p className="text-red-500 text-sm mt-2">
            This action cannot be undone.
          </p>
        </div>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col-reverse
          sm:flex-row

          gap-3

          mt-8
          "
        >
          <button
            onClick={onClose}
            className="
            w-full

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

            py-3

            rounded-2xl

            bg-gradient-to-r
            from-red-500
            to-red-600

            text-white
            font-semibold

            flex
            items-center
            justify-center
            gap-2

            shadow-lg

            transition-all
            duration-300

            hover:scale-105
            active:scale-95
            "
          >
            <FaTrash />
            Delete Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeacherModal;

