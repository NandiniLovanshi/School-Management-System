import { useContext, useState } from "react";
import { SchoolContext } from "../context/SchoolContext";
import {
  FaSchool,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaImage,
  FaSave,
} from "react-icons/fa";

const SchoolProfile = () => {
  const { school, setSchool } = useContext(SchoolContext);

  const [formData, setFormData] = useState(school);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSchool(formData);

    alert("School Profile Updated Successfully");
  };

  return (
    <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-5 sm:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">

        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-4 border-sky-200 bg-slate-100">

          {formData.logo ? (
            <img
              src={formData.logo}
              alt="School Logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-3xl">
              <FaSchool />
            </div>
          )}

        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            School Profile
          </h2>

          <p className="text-slate-500 mt-1">
            Update your school's information and contact details.
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* School Name */}
        <div className="relative">
          <FaSchool className="absolute left-4 top-4 text-slate-400" />

          <input
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="School Name"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Principal */}
        <div className="relative">
          <FaUserTie className="absolute left-4 top-4 text-slate-400" />

          <input
            name="principal"
            value={formData.principal}
            onChange={handleChange}
            placeholder="Principal Name"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-4 top-4 text-slate-400" />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Address */}
        <div className="relative md:col-span-2">
          <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-400" />

          <textarea
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="School Address"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 resize-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Logo URL */}
        <div className="relative md:col-span-2">
          <FaImage className="absolute left-4 top-4 text-slate-400" />

          <input
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="School Logo URL"
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:ring-4 focus:ring-sky-100 focus:border-sky-400 outline-none transition"
          />
        </div>

        {/* Button */}
        <div className="md:col-span-2 flex justify-end">

          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            <FaSave />
            Save Profile
          </button>

        </div>

      </form>

    </div>
  );
};

export default SchoolProfile;