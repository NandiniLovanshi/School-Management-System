import { FaTrash, FaTimes } from "react-icons/fa";

const DeleteFeesModal = ({
  isOpen,
  onClose,
  deleteFees,
  fees,
  setFees,
}) => {
  if (!isOpen || !deleteFees) return null;

  const handleDelete = () => {
    const updatedFees = fees.filter(
      (fee) => fee.id !== deleteFees.id
    );

    setFees(updatedFees);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4">

      <div className="relative w-full max-w-md rounded-3xl border border-white/30 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

        {/* Top Gradient */}
        <div className="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          <FaTimes />
        </button>

        <div className="p-8">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-rose-200 flex items-center justify-center shadow-lg">
              <FaTrash className="text-red-600 text-4xl" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Delete Fees Record
          </h2>

          <p className="text-slate-500 text-center mt-3 leading-relaxed">
            Are you sure you want to permanently delete
            <br />

            <span className="font-bold text-slate-800">
              {deleteFees.name}
            </span>

            's fees record?

            <br />

            This action cannot be undone.
          </p>

          {/* Student Info */}
          <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">

            <div className="flex justify-between py-2">
              <span className="text-slate-500">
                Roll No
              </span>

              <span className="font-semibold">
                {deleteFees.rollNo}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-slate-500">
                Class
              </span>

              <span className="font-semibold">
                {deleteFees.class}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-slate-500">
                Amount
              </span>

              <span className="font-bold text-green-600">
                ₹{deleteFees.amount}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-slate-500">
                Status
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  deleteFees.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {deleteFees.status}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-2xl bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300 transition-all duration-300"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Delete Record
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DeleteFeesModal;