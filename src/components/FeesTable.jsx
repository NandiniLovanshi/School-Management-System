import {
  FaReceipt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const FeesTable = ({
  fees,
  setEditFees,
  setDeleteFees,
  setReceiptFees,
}) => {
  return (
    <div className="mt-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Fees Records
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage all student fee payments.
          </p>
        </div>

        <span className="px-4 py-2 rounded-xl bg-sky-100 text-sky-700 font-semibold text-sm">
          Total : {fees.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left text-slate-500 uppercase text-xs tracking-wider">

              <th className="px-6 py-4">Student</th>

              <th className="px-4 py-4">Roll No</th>

              <th className="px-4 py-4">Class</th>

              <th className="px-4 py-4">Amount</th>

              <th className="px-4 py-4">Date</th>

              <th className="px-4 py-4">Status</th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {fees.length > 0 ? (
              fees.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-slate-100 hover:bg-sky-50 transition-all duration-300"
                >

                  {/* Student */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={`https://i.pravatar.cc/100?img=${student.id % 70}`}
                        alt={student.name}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                      />

                      <div>

                        <h3 className="font-semibold text-slate-800">
                          {student.name}
                        </h3>

                        <p className="text-xs text-slate-500">
                          Student
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-4 py-5 font-medium text-slate-700">
                    {student.rollNo}
                  </td>

                  <td className="px-4 py-5">
                    {student.class}
                  </td>

                  <td className="px-4 py-5 font-bold text-green-600">
                    ₹{student.amount}
                  </td>

                  <td className="px-4 py-5 text-slate-600">
                    {student.date}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      {/* Receipt */}
                      <button
                        onClick={() =>
                          setReceiptFees(student)
                        }
                        className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white shadow hover:shadow-lg transition-all duration-300"
                      >
                        <FaReceipt className="mx-auto" />
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() =>
                          setEditFees(student)
                        }
                        className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-500 hover:text-white shadow hover:shadow-lg transition-all duration-300"
                      >
                        <FaEdit className="mx-auto" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          setDeleteFees(student)
                        }
                        className="w-10 h-10 rounded-xl bg-red-100 text-red-600 hover:bg-red-500 hover:text-white shadow hover:shadow-lg transition-all duration-300"
                      >
                        <FaTrash className="mx-auto" />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-14 text-slate-500"
                >
                  No Fees Records Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default FeesTable;