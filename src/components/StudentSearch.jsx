import { FaSearch, FaPlus } from "react-icons/fa";

const StudentSearch = ({
  onAddStudent,
  searchTerm,
  setSearchTerm,
  selectedClass,
  setSelectedClass,
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

      shadow-lg

      p-4
      sm:p-5
      lg:p-6
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row

        gap-4
        items-stretch
        lg:items-center
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
            sm:text-base
            "
          />

          <input
            type="text"
            placeholder="Search by Name or Roll No..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
            w-full

            pl-11
            pr-4

            py-3

            rounded-xl
            sm:rounded-2xl

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

        {/* Filter */}
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="
          w-full
          lg:w-52

          px-4
          py-3

          rounded-xl
          sm:rounded-2xl

          border
          border-slate-200

          bg-white

          text-sm
          sm:text-base

          outline-none

          transition-all

          focus:ring-4
          focus:ring-indigo-200
          focus:border-indigo-400
          "
        >
          <option>All Classes</option>
          <option>6th</option>
          <option>7th</option>
          <option>8th</option>
          <option>9th</option>
          <option>10th A</option>
          <option>10th B</option>
          <option>11th</option>
          <option>12th</option>
        </select>

        {/* Button
        <button
          onClick={onAddStudent}
          className="
          flex
          items-center
          justify-center

          gap-2

          w-full
          lg:w-auto

          px-5
          py-3

          rounded-xl
          sm:rounded-2xl

          bg-gradient-to-r
          from-sky-500
          to-indigo-500

          text-white

          text-sm
          sm:text-base

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
          Add Student
        </button> */}
      </div>
    </div>
  );
};

export default StudentSearch;