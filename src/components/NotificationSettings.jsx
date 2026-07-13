import { useState } from "react";
const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    email: true,
    sms: false,
    attendance: true,
    fees: true,
  });
  const handleChange = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };
  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Notification Settings
      </h2>
      <div className="space-y-5">
        {/* Email */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div>
            <h3 className="font-semibold text-slate-800">
              Email Notification
            </h3>
            <p className="text-sm text-slate-500">
              Receive updates through email
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.email}
            onChange={() => handleChange("email")}
            className="w-5 h-5"
          />
        </div>
        {/* SMS */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div>
            <h3 className="font-semibold text-slate-800">
              SMS Notification
            </h3>
            <p className="text-sm text-slate-500">
              Receive SMS alerts
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.sms}
            onChange={() => handleChange("sms")}
            className="w-5 h-5"
          />
        </div>
        {/* Attendance */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div>
            <h3 className="font-semibold text-slate-800">
              Attendance Alert
            </h3>
            <p className="text-sm text-slate-500">
              Get attendance updates
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.attendance}
            onChange={() => handleChange("attendance")}
            className="w-5 h-5"
          />
        </div>
        {/* Fees */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl">
          <div>
            <h3 className="font-semibold text-slate-800">
              Fee Payment Alert
            </h3>
            <p className="text-sm text-slate-500">
              Get fee payment notifications
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.fees}
            onChange={() => handleChange("fees")}
            className="w-5 h-5"
          />
        </div>
      </div>
      <button
        className="mt-6 px-6 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600"
      >
        Save Settings
      </button>
    </div>
  );
};
export default NotificationSettings;