import { useState, useEffect } from "react";
import { FaBullhorn, FaTrash } from "react-icons/fa";

const Notice = () => {
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");
  const [notices, setNotices] = useState([]);

  // Load Notices
  useEffect(() => {
    const savedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(savedNotices);
  }, []);

  // Save Notices
  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  // Publish Notice
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !notice) {
      alert("Please fill all fields");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title,
      notice,
      date: new Date().toLocaleString(),
    };

    setNotices([newNotice, ...notices]);

    alert("Notice Published Successfully");

    setTitle("");
    setNotice("");
  };

  // Delete Notice
  const handleDelete = (id) => {
    const updated = notices.filter((item) => item.id !== id);
    setNotices(updated);
  };

  return (
    <div className="mt-6 space-y-6">

      {/* Heading */}
      <div className="bg-white rounded-3xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Create Notice
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl p-6 space-y-5"
      >
        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-sky-400"
        />

        <textarea
          rows="6"
          placeholder="Write Notice..."
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-sky-400"
        />

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl transition"
        >
          Publish Notice
        </button>
      </form>

      {/* Published Notices */}
      <div className="bg-white rounded-3xl shadow-xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Published Notices
          </h2>

          <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-xl font-semibold">
            Total : {notices.length}
          </span>
        </div>

        {notices.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <FaBullhorn className="text-5xl mx-auto mb-4 text-slate-300" />
            <p>No Notice Available</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      📢 {item.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {item.notice}
                    </p>

                    <p className="text-sm text-slate-400 mt-3">
                      {item.date}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-100 hover:bg-red-500 hover:text-white text-red-600 p-3 rounded-xl transition"
                  >
                    <FaTrash />
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Notice;