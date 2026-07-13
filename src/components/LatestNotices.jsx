import { useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LatestNotices = () => {
    const [notices, setNotices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const saved =
            JSON.parse(localStorage.getItem("notices")) || [];

        // Sirf latest 3 notices
        setNotices(saved.slice(0, 3));
    }, []);

    return (
        <div className="bg-white rounded-3xl shadow-xl p-6">

            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <FaBullhorn className="text-pink-500" />
                    Latest Notices
                </h2>

                <button
                    onClick={() => navigate("/notice")}
                    className="text-sky-500 font-semibold hover:underline"
                >
                    View All
                </button>
            </div>

            {notices.length === 0 ? (
                <p className="text-slate-500">
                    No Notice Available
                </p>
            ) : (
                <div className="space-y-4">
                    {notices.map((item) => (
                        <div
                            key={item.id}
                            className="border-b pb-3"
                        >
                            <h3 className="font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-sm text-slate-500">
                                {(item.notice || "").length > 70
                                    ? item.notice.substring(0, 70) + "..."
                                    : item.notice || "No Notice"}
                            </p>

                            <p className="text-xs text-slate-400 mt-1">
                                {item.date}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LatestNotices;