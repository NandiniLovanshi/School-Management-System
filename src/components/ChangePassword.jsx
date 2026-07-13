import {
  FaLock,
  FaKey,
  FaShieldAlt,
  FaSave,
} from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-5 sm:p-8">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow-lg">
          <FaShieldAlt className="text-2xl" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Change Password
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Update your account password to keep your account secure.
          </p>
        </div>

      </div>

      {/* Form */}
      <div className="space-y-6">

        {/* Current Password */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Current Password
          </label>

          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="password"
              placeholder="Enter current password"
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>

        {/* New Password */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            New Password
          </label>

          <div className="relative">

            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-100"
            />

          </div>

          <p className="text-xs text-slate-500 mt-2">
            Password should contain at least 8 characters.
          </p>

        </div>

        {/* Confirm Password */}
        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">

            <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-100"
            />

          </div>

        </div>

      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">

        <button
          className="px-6 py-3 rounded-2xl border border-slate-300 bg-white hover:bg-slate-100 transition font-medium"
        >
          Cancel
        </button>

        <button
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          <FaSave />
          Update Password
        </button>

      </div>

    </div>
  );
};

export default ChangePassword;