import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddFeesModal = ({
  isOpen,
  onClose,
  fees,
  setFees,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    class: "",
    amount: "",
    date: "",
    status: "Pending",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFee = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    setFees([...fees, newFee]);

    setFormData({
      name: "",
      rollNo: "",
      class: "",
      amount: "",
      date: "",
      status: "Pending",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Add Fees
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Add a new student fee record.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            <FaTimes className="mx-auto" />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Roll Number"
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          >
            <option value="">Select Class</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Fee Amount"
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-3 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Paid</option>
            <option>Pending</option>
          </select>

          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 transition"
            >
              Save Fees
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddFeesModal;