import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AttendanceTable = ({
  attendance,
  setViewAttendance,
  setEditAttendance,
  setDeleteAttendance,
}) => {
  return (
    <div
      className="
      mt-8
      sm:mt-10

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
      {/* Heading */}

      <div className="mb-5 sm:mb-6">
        <h2
          className="
          text-xl
          sm:text-2xl

          font-bold

          text-slate-800
          "
        >
          Attendance Records
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          View and manage student attendance history.
        </p>
      </div>


      {/* Table */}

      <div className="overflow-x-auto rounded-2xl">

        <table className="w-full min-w-[800px]">

          <thead>

            <tr
              className="
              border-b
              border-slate-200

              text-left

              text-slate-600

              bg-white/40
              "
            >

              <th className="py-4 px-3">
                Student
              </th>

              <th className="px-3">
                Roll No
              </th>

              <th className="px-3">
                Class
              </th>

              <th className="px-3">
                Date
              </th>

              <th className="px-3">
                Status
              </th>

              <th className="px-3">
                Actions
              </th>

            </tr>

          </thead>


          <tbody>

            {
              attendance.map((student)=>(

                <tr
                  key={student.id}
                  className="
                  border-b
                  border-slate-100

                  hover:bg-white/70

                  transition
                  duration-300
                  "
                >

                  {/* Student */}

                  <td className="py-4 px-3">

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      "
                    >

                      <img
                        src={`https://i.pravatar.cc/100?img=${student.id + 10}`}
                        alt={student.name}
                        className="
                        w-10
                        h-10

                        sm:w-12
                        sm:h-12

                        rounded-full

                        shadow
                        "
                      />

                      <span
                        className="
                        font-semibold
                        text-slate-800

                        text-sm
                        sm:text-base
                        "
                      >
                        {student.name}
                      </span>

                    </div>

                  </td>



                  <td className="px-3 text-sm sm:text-base">
                    {student.rollNo}
                  </td>



                  <td className="px-3 text-sm sm:text-base">
                    {student.class}
                  </td>



                  <td className="px-3 text-sm sm:text-base">
                    {student.date}
                  </td>



                  {/* Status */}

                  <td className="px-3">

                    <span
                      className={`
                      inline-block

                      px-3
                      py-1

                      rounded-full

                      text-xs
                      sm:text-sm

                      font-medium

                      ${
                        student.status === "Present"
                        ?
                        "bg-green-100 text-green-700"
                        :
                        student.status === "Absent"
                        ?
                        "bg-red-100 text-red-700"
                        :
                        "bg-yellow-100 text-yellow-700"
                      }
                      `}
                    >
                      {student.status}
                    </span>

                  </td>



                  {/* Actions */}

                  <td className="px-3">

                    <div className="flex gap-2 sm:gap-3">

                      {/* View */}

                      <button
                        onClick={() =>
                          setViewAttendance(student)
                        }
                        className="
                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-xl

                        bg-sky-100
                        text-sky-600

                        hover:bg-sky-500
                        hover:text-white

                        flex
                        items-center
                        justify-center

                        transition
                        "
                      >
                        <FaEye />
                      </button>



                      {/* Edit */}

                      <button
                        onClick={() =>
                          setEditAttendance(student)
                        }
                        className="
                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-xl

                        bg-yellow-100
                        text-yellow-600

                        hover:bg-yellow-500
                        hover:text-white

                        flex
                        items-center
                        justify-center

                        transition
                        "
                      >
                        <FaEdit />
                      </button>



                      {/* Delete */}

                      <button
                        onClick={() =>
                          setDeleteAttendance(student)
                        }
                        className="
                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-xl

                        bg-red-100
                        text-red-600

                        hover:bg-red-500
                        hover:text-white

                        flex
                        items-center
                        justify-center

                        transition
                        "
                      >
                        <FaTrash />
                      </button>


                    </div>

                  </td>


                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AttendanceTable;