import {
  FaUserCheck,
  FaUserTimes,
  FaUserClock,
  FaChartPie,
} from "react-icons/fa";

const AttendanceSummary = ({ attendance }) => {
  const present = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const leave = attendance.filter(
    (item) => item.status === "Leave"
  ).length;

  const total = attendance.length;

  const percentage =
    total === 0
      ? 0
      : ((present / total) * 100).toFixed(1);

  const cards = [
    {
      title: "Present",
      value: present,
      color: "from-green-400 to-emerald-500",
      icon: <FaUserCheck />,
    },
    {
      title: "Absent",
      value: absent,
      color: "from-red-400 to-rose-500",
      icon: <FaUserTimes />,
    },
    {
      title: "Leave",
      value: leave,
      color: "from-yellow-400 to-orange-500",
      icon: <FaUserClock />,
    },
    {
      title: "Attendance %",
      value: `${percentage}%`,
      color: "from-sky-400 to-indigo-500",
      icon: <FaChartPie />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
          relative
          overflow-hidden

          bg-white/70
          backdrop-blur-xl

          border
          border-white/50

          rounded-2xl
          sm:rounded-3xl

          p-5
          sm:p-6

          shadow-xl

          transition-all
          duration-300

          hover:-translate-y-2
          hover:shadow-2xl
          "
        >
          {/* Background Circle */}

          <div
            className={`absolute -top-10 -right-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r ${card.color} opacity-20`}
          />

          <div className="relative flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm sm:text-base">
                {card.title}
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`
              w-14
              h-14
              sm:w-16
              sm:h-16

              rounded-2xl

              bg-gradient-to-r
              ${card.color}

              text-white

              flex
              items-center
              justify-center

              text-xl
              sm:text-2xl

              shadow-lg
              `}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceSummary;