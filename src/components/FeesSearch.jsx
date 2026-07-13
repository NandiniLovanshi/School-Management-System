import { FaSearch, FaPlus } from "react-icons/fa";


const FeesSearch = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  classFilter,
  setClassFilter,
  onAddFees,
}) => {


  return (

    <div
      className="
        bg-white/60
        backdrop-blur-xl
        border
        border-white/40
        rounded-3xl
        shadow-xl
        p-5
        md:p-6
      "
    >


      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-4
        "
      >



        {/* Search */}

        <div className="
          relative
          lg:col-span-1
        "
        >

          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />


          <input

            type="text"

            placeholder="Search Student..."

            value={searchTerm}

            onChange={(e)=>setSearchTerm(e.target.value)}

            className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              outline-none
              focus:ring-2
              focus:ring-emerald-400
              transition
            "

          />

        </div>






        {/* Status Filter */}

        <select

          value={statusFilter}

          onChange={(e)=>setStatusFilter(e.target.value)}

          className="
            px-5
            py-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            outline-none
            focus:ring-2
            focus:ring-emerald-400
            cursor-pointer
          "

        >

          <option value="All">
            All Status
          </option>


          <option value="Paid">
            Paid
          </option>


          <option value="Pending">
            Pending
          </option>


        </select>







        {/* Class Filter */}

        <select

          value={classFilter}

          onChange={(e)=>setClassFilter(e.target.value)}

          className="
            px-5
            py-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            outline-none
            focus:ring-2
            focus:ring-emerald-400
            cursor-pointer
          "

        >

          <option value="All">
            All Classes
          </option>


          <option value="6th">
            6th
          </option>


          <option value="7th">
            7th
          </option>


          <option value="8th">
            8th
          </option>


          <option value="9th B">
            9th B
          </option>


          <option value="10th A">
            10th A
          </option>


          <option value="10th B">
            10th B
          </option>


          <option value="11th">
            11th
          </option>


          <option value="12th">
            12th
          </option>


        </select>








        {/* Add Fees Button */}

        <button

          onClick={onAddFees}

          className="
            flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-emerald-500
            to-green-600
            text-white
            font-medium
            shadow-lg
            hover:shadow-xl
            hover:scale-105
            transition-all
            duration-300
          "

        >

          <FaPlus />

          Add Fees

        </button>



      </div>


    </div>

  );

};


export default FeesSearch;