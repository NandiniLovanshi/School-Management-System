import { FaTimes } from "react-icons/fa";

const ViewAttendanceModal = ({ attendance, onClose }) => {

  if (!attendance) return null;


  return (
    <div
      className="
      fixed
      inset-0

      bg-black/40
      backdrop-blur-sm

      flex
      items-center
      justify-center

      z-50

      p-4
      "
    >

      <div
        className="
        w-full
        max-w-xl

        max-h-[90vh]
        overflow-y-auto

        bg-white/80
        backdrop-blur-xl

        border
        border-white/50

        rounded-2xl
        sm:rounded-3xl

        shadow-2xl

        p-5
        sm:p-8
        "
      >


        {/* Header */}

        <div
          className="
          flex
          justify-between
          items-center

          mb-6
          "
        >

          <h2
            className="
            text-2xl
            sm:text-3xl

            font-bold

            text-slate-800
            "
          >
            Attendance Details
          </h2>


          <button
            onClick={onClose}
            className="
            w-9
            h-9

            sm:w-10
            sm:h-10

            rounded-xl

            bg-red-100

            text-red-500

            hover:bg-red-500
            hover:text-white

            transition

            flex
            items-center
            justify-center
            "
          >
            <FaTimes />
          </button>


        </div>




        {/* Profile */}


        <div
          className="
          flex
          flex-col
          items-center

          mb-8
          "
        >

          <img
            src={`https://i.pravatar.cc/150?img=${attendance.id + 10}`}
            alt={attendance.name}

            className="
            w-24
            h-24

            sm:w-28
            sm:h-28

            rounded-full

            border-4
            border-green-400

            shadow-lg
            "
          />


          <h3
            className="
            mt-4

            text-xl
            sm:text-2xl

            font-bold

            text-slate-800
            "
          >
            {attendance.name}
          </h3>


          <p className="text-slate-500 text-sm sm:text-base">
            Roll No : {attendance.rollNo}
          </p>


        </div>





        {/* Details */}


        <div
          className="
          grid

          grid-cols-1
          sm:grid-cols-2

          gap-4
          "
        >


          <div
            className="
            bg-white/70

            rounded-2xl

            p-4

            shadow-sm
            "
          >
            <p className="text-sm text-slate-500">
              Class
            </p>

            <p className="font-semibold mt-1">
              {attendance.class}
            </p>
          </div>




          <div
            className="
            bg-white/70

            rounded-2xl

            p-4

            shadow-sm
            "
          >
            <p className="text-sm text-slate-500">
              Date
            </p>

            <p className="font-semibold mt-1">
              {attendance.date}
            </p>
          </div>




          <div
            className="
            bg-white/70

            rounded-2xl

            p-4

            shadow-sm
            "
          >

            <p className="text-sm text-slate-500">
              Status
            </p>


            <span
              className={`
              inline-block

              mt-2

              px-3
              py-1

              rounded-full

              text-sm

              font-medium

              ${
                attendance.status === "Present"
                ?
                "bg-green-100 text-green-700"
                :
                attendance.status === "Absent"
                ?
                "bg-red-100 text-red-700"
                :
                "bg-yellow-100 text-yellow-700"
              }
              `}
            >
              {attendance.status}
            </span>


          </div>



          <div
            className="
            bg-white/70

            rounded-2xl

            p-4

            shadow-sm
            "
          >

            <p className="text-sm text-slate-500">
              Record ID
            </p>

            <p className="font-semibold mt-1">
              #{attendance.id}
            </p>

          </div>


        </div>




        {/* Close Button */}

        <div className="mt-8 text-center">

          <button
            onClick={onClose}
            className="
            px-8
            py-3

            rounded-xl

            bg-gradient-to-r
            from-green-500
            to-emerald-500

            text-white

            font-semibold

            shadow-lg

            hover:scale-105

            transition
            "
          >
            Close
          </button>


        </div>


      </div>


    </div>
  );
};


export default ViewAttendanceModal;