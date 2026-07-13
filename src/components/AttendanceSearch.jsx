import { FaSearch, FaPlus } from "react-icons/fa";

const AttendanceSearch = ({
  onMarkAttendance,
  searchTerm,
  setSearchTerm,
  selectedClass,
  setSelectedClass,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div
      className="
      bg-white/70
      backdrop-blur-xl

      border
      border-white/50

      rounded-2xl
      sm:rounded-3xl

      shadow-xl

      p-4
      sm:p-6
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row

        gap-4
        "
      >
        {/* Search */}

        <div className="relative flex-1">
          <FaSearch
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2

            text-slate-400
            text-sm
            "
          />

          <input
            type="text"
            placeholder="Search Student..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
            w-full

            pl-11
            pr-4
            py-3

            rounded-2xl

            border
            border-slate-200

            bg-white

            text-sm
            sm:text-base

            outline-none

            transition-all
            duration-300

            focus:ring-4
            focus:ring-green-200
            focus:border-green-400
            "
          />
        </div>

        {/* Class */}

        <select
          value={selectedClass}
          onChange={(e) =>
            setSelectedClass(e.target.value)
          }
          className="
          w-full
          lg:w-48

          px-4
          py-3

          rounded-2xl

          border
          border-slate-200

          bg-white

          text-sm
          sm:text-base

          outline-none

          transition-all
          duration-300

          focus:ring-4
          focus:ring-green-200
          focus:border-green-400
          "
        >
          <option>All Classes</option>
          <option>6th</option>
          <option>7th</option>
          <option>8th</option>
          <option>9th B</option>
          <option>10th A</option>
          <option>10th B</option>
          <option>11th</option>
          <option>12th C</option>
        </select>

        {/* Date */}

        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(e.target.value)
          }
          className="
          w-full
          lg:w-52

          px-4
          py-3

          rounded-2xl

          border
          border-slate-200

          bg-white

          text-sm
          sm:text-base

          outline-none

          transition-all
          duration-300

          focus:ring-4
          focus:ring-green-200
          focus:border-green-400
          "
        />

        {/* Button */}

        <button
          onClick={onMarkAttendance}
          className="
          w-full
          lg:w-auto

          flex
          items-center
          justify-center
          gap-2

          px-6
          py-3

          rounded-2xl

          bg-gradient-to-r
          from-green-500
          to-emerald-500

          text-white
          font-semibold

          shadow-lg

          transition-all
          duration-300

          hover:scale-105
          hover:shadow-xl

          active:scale-95
          "
        >
          <FaPlus className="text-sm sm:text-base" />

          <span className="text-sm sm:text-base">
            Mark Attendance
          </span>
        </button>
      </div>
    </div>
  );
};

export default AttendanceSearch;