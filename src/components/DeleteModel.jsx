import { FaTrash, FaTimes } from "react-icons/fa";

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
  title,
  message,
}) => {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl shadow-2xl w-[420px] p-8">

        <div className="flex justify-center">

          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">

            <FaTrash className="text-4xl text-red-500" />

          </div>

        </div>

        <h2 className="text-2xl font-bold text-center mt-6">
          {title}
        </h2>

        <p className="text-slate-500 text-center mt-3">
          {message}
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            <FaTimes className="inline mr-2" />
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600"
          >
            <FaTrash className="inline mr-2" />
            Delete
          </button>

        </div>

      </div>

    </div>

  );
};

export default DeleteModal;