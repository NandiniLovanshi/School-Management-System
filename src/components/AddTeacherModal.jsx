
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddTeacherModal = ({
  isOpen,
  onClose,
  teachers,
  setTeachers,
}) => {
  const [teacher, setTeacher] = useState({
    name: "",
    teacherId: "",
    subject: "",
    email: "",
    phone: "",
    experience: "",
    address: "",
    status: "Active",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = {
      id: Date.now(),
      ...teacher,
    };

    setTeachers([...teachers, newTeacher]);

    setTeacher({
      name: "",
      teacherId: "",
      subject: "",
      email: "",
      phone: "",
      experience: "",
      address: "",
      status: "Active",
    });

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
        {/* Header */}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              Add Teacher
            </h2>

            <p className="text-slate-500 mt-1 text-sm">
              Fill teacher information below.
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
            name="name"
            value={teacher.name}
            onChange={handleChange}
            placeholder="Teacher Name"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <input
            name="teacherId"
            value={teacher.teacherId}
            onChange={handleChange}
            placeholder="Teacher ID"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <input
            name="subject"
            value={teacher.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <input
            name="experience"
            value={teacher.experience}
            onChange={handleChange}
            placeholder="Experience"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <input
            name="email"
            type="email"
            value={teacher.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <input
            name="phone"
            value={teacher.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <textarea
            name="address"
            value={teacher.address}
            onChange={handleChange}
            rows="3"
            placeholder="Address"
            className="md:col-span-2 px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          />

          <select
            name="status"
            value={teacher.status}
            onChange={handleChange}
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white text-sm sm:text-base outline-none transition-all duration-300 focus:ring-4 focus:ring-violet-200 focus:border-violet-400"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div
            className="
            md:col-span-2

            flex
            flex-col-reverse
            sm:flex-row

            justify-end

            gap-3
            mt-2
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

              font-medium

              transition-all
              duration-300

              hover:bg-slate-300
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
              Save Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherModal;

