
                     import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";

const StudentTable = ({
  students,
  setStudents,
  setShowAdd,
  setEditStudent,
  setViewStudent,
  setDeleteStudent,
}) => {
  // Delete Student
  const handleDelete = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  };

  return (
    <div
      className="
      mt-6
      sm:mt-8
      lg:mt-10

      bg-white/70
      backdrop-blur-xl

      border
      border-white/50

      rounded-2xl
      sm:rounded-3xl

      shadow-xl

      p-4
      sm:p-6
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        sm:flex-row

        gap-4

        justify-between
        sm:items-center

        mb-6
        "
      >
        <div>
          <h2
            className="
            text-xl
            sm:text-2xl
            lg:text-2xl

            font-bold
            text-slate-800
            "
          >
            Recent Students
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Total Students : {students.length}
          </p>
        </div>

        <button
          onClick={() => setShowAdd(true)}
          className="
          flex
          items-center
          justify-center
          gap-2

          w-full
          sm:w-auto

          px-5
          py-3

          rounded-xl
          sm:rounded-2xl

          bg-gradient-to-r
          from-sky-500
          to-indigo-500

          text-white
          font-semibold

          shadow-lg

          hover:scale-105
          transition-all
          duration-300
          "
        >
          <FaPlus />
          Add Student
        </button>
      </div>

      {/* Empty State */}

      {students.length === 0 && (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            No Students Found
          </h3>

          <p className="text-slate-500 mt-2">
            Click on Add Student to create one.
          </p>
        </div>
      )}

      {students.length > 0 && (
        <>
          {/* ================= MOBILE VIEW ================= */}

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {students.map((student) => (
              <div
                key={student.id}
                className="
                rounded-2xl
                border
                border-slate-200

                bg-white

                p-4

                shadow-md

                hover:shadow-lg

                transition-all
                "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${student.id + 10}`}
                    alt={student.name}
                    className="
                    w-14
                    h-14

                    rounded-full

                    border-2
                    border-white

                    shadow
                    "
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">
                      {student.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {student.rollNo}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Class :</span>{" "}
                    {student.class}
                  </p>

                  <p className="break-all">
                    <span className="font-semibold">Email :</span>{" "}
                    {student.email}
                  </p>

                  <p>
                    <span className="font-semibold">Phone :</span>{" "}
                    {student.phone}
                  </p>
                </div>

                <div className="flex justify-end gap-3 mt-5">
                  <button
                    onClick={() => setViewStudent(student)}
                    className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white transition flex items-center justify-center"
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => setEditStudent(student)}
                    className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white transition flex items-center justify-center"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => setDeleteStudent(student)}
                    className="w-10 h-10 rounded-xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP TABLE PART 2 me aayega */}
                    {/* ================= DESKTOP TABLE ================= */}

          <div className="hidden md:block overflow-x-auto rounded-2xl">
            <table className="min-w-full">
              <thead className="bg-slate-100 sticky top-0">
                <tr className="text-left">
                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Student
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Roll No
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Class
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Email
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Phone
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Status
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={student.id}
                    className={`
                      transition-all
                      duration-300
                      hover:bg-sky-50
                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50/60"
                      }
                    `}
                  >
                    {/* Student */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/100?img=${student.id + 10}`}
                          alt={student.name}
                          className="w-12 h-12 rounded-full border-2 border-white shadow"
                        />

                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {student.name}
                          </h4>
                        </div>
                      </div>
                    </td>

                    {/* Roll */}
                    <td className="px-5 py-4 text-slate-600">
                      {student.rollNo}
                    </td>

                    {/* Class */}
                    <td className="px-5 py-4 text-slate-600">
                      {student.class}
                    </td>

                    {/* Email */}
                    <td className="px-5 py-4 text-slate-600">
                      {student.email}
                    </td>

                    {/* Phone */}
                    <td className="px-5 py-4 text-slate-600">
                      {student.phone}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewStudent(student)}
                          className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        >
                          <FaEye />
                        </button>

                        <button
                          onClick={() => setEditStudent(student)}
                          className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() => setDeleteStudent(student)}
                          className="w-10 h-10 rounded-xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentTable;