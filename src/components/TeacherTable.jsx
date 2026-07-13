import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const TeacherTable = ({
  teachers,
  setTeachers,
  setEditTeacher,
  setViewTeacher,
  setDeleteTeacher,
}) => {
  return (
    <div
      className="
      mt-6
      sm:mt-8

      bg-white/70
      backdrop-blur-xl

      border
      border-white/50

      rounded-2xl
      sm:rounded-3xl

      shadow-xl

      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        flex
        flex-col
        sm:flex-row

        sm:items-center
        sm:justify-between

        gap-3

        p-4
        sm:p-6

        border-b
        border-slate-200
        "
      >
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            Recent Teachers
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Total Teachers : {teachers.length}
          </p>
        </div>
      </div>

      {/* Empty State */}

      {teachers.length === 0 ? (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold text-slate-700">
            No Teachers Found
          </h3>

          <p className="text-slate-500 mt-2">
            Add your first teacher to get started.
          </p>
        </div>
      ) : (
        <>
          {/* ================= MOBILE CARDS ================= */}

          <div className="block md:hidden p-4 space-y-4">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="
                rounded-2xl

                border
                border-slate-200

                bg-white

                shadow-md

                p-4

                transition-all
                duration-300

                hover:shadow-xl
                "
              >
                {/* Top */}

                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/100?img=${teacher.id + 20}`}
                    alt={teacher.name}
                    className="w-14 h-14 rounded-full border-2 border-violet-200"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">
                      {teacher.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {teacher.teacherId}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </div>

                {/* Details */}

                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                  <div>
                    <p className="text-slate-400">
                      Subject
                    </p>

                    <p className="font-medium">
                      {teacher.subject}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Experience
                    </p>

                    <p className="font-medium">
                      {teacher.experience}
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-slate-400">
                      Email
                    </p>

                    <p className="font-medium break-all">
                      {teacher.email}
                    </p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-slate-400">
                      Phone
                    </p>

                    <p className="font-medium">
                      {teacher.phone}
                    </p>
                  </div>
                </div>

                {/* Actions */}

                <div className="flex justify-center gap-3 mt-5">
                  <button
                    onClick={() => setViewTeacher(teacher)}
                    className="
                    w-11
                    h-11

                    rounded-xl

                    bg-sky-100
                    text-sky-600

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    hover:bg-sky-500
                    hover:text-white
                    hover:scale-110
                    "
                  >
                    <FaEye />
                  </button>

                  <button
                    onClick={() => setEditTeacher(teacher)}
                    className="
                    w-11
                    h-11

                    rounded-xl

                    bg-yellow-100
                    text-yellow-600

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    hover:bg-yellow-500
                    hover:text-white
                    hover:scale-110
                    "
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => setDeleteTeacher(teacher)}
                    className="
                    w-11
                    h-11

                    rounded-xl

                    bg-red-100
                    text-red-600

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    hover:bg-red-500
                    hover:text-white
                    hover:scale-110
                    "
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>


                    {/* ================= DESKTOP TABLE ================= */}

          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-100 sticky top-0">
                <tr className="text-left">
                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Teacher
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Teacher ID
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Subject
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Email
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Phone
                  </th>

                  <th className="px-5 py-4 text-sm font-semibold text-slate-600 uppercase">
                    Experience
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
                {teachers.map((teacher, index) => (
                  <tr
                    key={teacher.id}
                    className={`
                      transition-all
                      duration-300
                      hover:bg-violet-50
                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50/60"
                      }
                    `}
                  >
                    {/* Teacher */}

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/100?img=${teacher.id + 20}`}
                          alt={teacher.name}
                          className="w-12 h-12 rounded-full border-2 border-white shadow"
                        />

                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {teacher.name}
                          </h4>
                        </div>
                      </div>
                    </td>

                    {/* Teacher ID */}

                    <td className="px-5 py-4 text-slate-600">
                      {teacher.teacherId}
                    </td>

                    {/* Subject */}

                    <td className="px-5 py-4 text-slate-600">
                      {teacher.subject}
                    </td>

                    {/* Email */}

                    <td className="px-5 py-4 text-slate-600">
                      {teacher.email}
                    </td>

                    {/* Phone */}

                    <td className="px-5 py-4 text-slate-600">
                      {teacher.phone}
                    </td>

                    {/* Experience */}

                    <td className="px-5 py-4 text-slate-600">
                      {teacher.experience}
                    </td>

                    {/* Status */}

                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          teacher.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {teacher.status}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setViewTeacher(teacher)}
                          className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        >
                          <FaEye />
                        </button>

                        <button
                          onClick={() => setEditTeacher(teacher)}
                          className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() => setDeleteTeacher(teacher)}
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

export default TeacherTable;