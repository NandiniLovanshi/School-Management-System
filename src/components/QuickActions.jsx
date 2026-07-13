import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaChalkboardTeacher,
  FaBullhorn,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const actions = [
  {
    title: "Add Student",
    icon: <FaUserPlus />,
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Add Teacher",
    icon: <FaChalkboardTeacher />,
    color: "from-violet-400 to-indigo-500",
  },
  {
    title: "Create Notice",
    icon: <FaBullhorn />,
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Collect Fees",
    icon: <FaMoneyCheckAlt />,
    color: "from-emerald-400 to-green-500",
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  const handleAction = (title) => {
    switch (title) {
      case "Add Student":
        navigate("/students?open=add");
        break;

      case "Add Teacher":
        navigate("/teachers?open=add");
        break;

      case "Create Notice":
        navigate("/notice");
        break;

      case "Collect Fees":
        navigate("/fees?open=add");
        break;

      default:
        break;
    }
  };

  return (
    <section className="mt-8 sm:mt-10">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">
          Quick Actions
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((item) => (
          <button
            key={item.title}
            onClick={() => handleAction(item.title)}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-white/70
              backdrop-blur-xl
              border
              border-white/50
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-2xl group-hover:opacity-40`}
            />

            <div
              className={`
                relative
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-gradient-to-r
                ${item.color}
                flex
                items-center
                justify-center
                text-white
                text-2xl
                shadow-lg
                group-hover:scale-110
                group-hover:rotate-12
                transition-all
                duration-300
              `}
            >
              {item.icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-800 text-center">
              {item.title}
            </h3>

            <div
              className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;