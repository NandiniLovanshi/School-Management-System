import { FaSearch, FaPlus } from "react-icons/fa";

const TeacherSearch = ({
  onAddTeacher,
  searchTerm,
  setSearchTerm,
  selectedSubject,
  setSelectedSubject,
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
            placeholder="Search by Name or Teacher ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
            focus:ring-sky-200
            focus:border-sky-400
            "
          />
        </div>

        {/* Subject */}

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="
          w-full
          lg:w-60

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
          focus:ring-indigo-200
          focus:border-indigo-400
          "
        >
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Computer</option>
          <option>Social Science</option>
        </select>

        {/* Button */}

        <button
          onClick={onAddTeacher}
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
          from-violet-500
          to-indigo-500

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
            Add Teacher
          </span>
        </button>
      </div>
    </div>
  );
};

export default TeacherSearch;