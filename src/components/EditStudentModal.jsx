import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const EditStudentModal = ({
  student,
  students,
  setStudents,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    rollNo: "",
    class: "",
    email: "",
    phone: "",
    status: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  if (!student) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = students.map((item) =>
      item.id === formData.id ? formData : item
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
      sm:p-6
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

        border
        border-white/50

        rounded-2xl
        sm:rounded-3xl

        shadow-2xl

        p-5
        sm:p-6
        lg:p-8
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Edit Student
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Update student information.
            </p>
          </div>

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

        {/* Form */}

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
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-sky-200 focus:border-sky-400"
          />

          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Roll Number"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-sky-200 focus:border-sky-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-sky-200 focus:border-sky-400"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-sky-200 focus:border-sky-400"
          />

          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400"
          >
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th A</option>
            <option>10th B</option>
            <option>11th</option>
            <option>12th</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          {/* Buttons */}

          <div
            className="
            md:col-span-2

            flex
            flex-col-reverse
            sm:flex-row

            justify-end

            gap-3
            mt-3
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
              w-full
              sm:w-auto

              px-6
              py-3

              rounded-2xl

              bg-slate-200
              hover:bg-slate-300

              font-medium

              transition-all
              duration-300
              "
            >
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
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentModal;