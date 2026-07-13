
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const EditTeacherModal = ({
  teacher,
  teachers,
  setTeachers,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    teacherId: "",
    subject: "",
    email: "",
    phone: "",
    experience: "",
    address: "",
    status: "",
  });

  useEffect(() => {
    if (teacher) {
      setFormData(teacher);
    }
  }, [teacher]);

  if (!teacher) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTeachers = teachers.map((item) =>
      item.id === formData.id ? formData : item
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
              Edit Teacher
            </h2>

            <p className="text-slate-500 mt-1 text-sm">
              Update teacher information.
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Teacher Name"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <input
            name="teacherId"
            value={formData.teacherId}
            onChange={handleChange}
            placeholder="Teacher ID"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            placeholder="Address"
            className="md:col-span-2 px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="px-4 py-3 rounded-2xl border border-slate-300 bg-white outline-none focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400"
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

              hover:bg-slate-300
              transition
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
              from-yellow-500
              to-orange-500

              text-white
              font-semibold

              shadow-lg

              transition-all
              duration-300

              hover:scale-105
              active:scale-95
              "
            >
              Update Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeacherModal;

