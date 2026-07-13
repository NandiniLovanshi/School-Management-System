import { useContext, useState } from "react";
import { AttendanceContext } from "../context/AttendanceContext";
import AttendanceSearch from "../components/AttendanceSearch";
import AttendanceSummary from "../components/AttendanceSummary";
import AttendanceTable from "../components/AttendanceTable";
import MarkAttendanceModal from "../components/MarkAttendanceModal";
import ViewAttendanceModal from "../components/ViewAttendanceModal";
import EditAttendanceModal from "../components/EditAttendanceModal";
import DeleteAttendanceModal from "../components/DeleteAttendanceModal";

const Attendance = () => {
  const { attendance, setAttendance } = useContext(AttendanceContext);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Class Filter
  const [selectedClass, setSelectedClass] =
    useState("All Classes");

  // Date Filter
  const [selectedDate, setSelectedDate] =
    useState("");

  // Modals
  const [showAdd, setShowAdd] = useState(false);
  const [viewAttendance, setViewAttendance] =
    useState(null);
  const [editAttendance, setEditAttendance] =
    useState(null);
  const [deleteAttendance, setDeleteAttendance] =
    useState(null);

  // Search + Filter
  const filteredAttendance = attendance.filter(
    (student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        student.rollNo.includes(searchTerm);

      const matchesClass =
        selectedClass === "All Classes" ||
        student.class === selectedClass;

      const matchesDate =
        selectedDate === "" ||
        student.date === selectedDate;

      return (
        matchesSearch &&
        matchesClass &&
        matchesDate
      );
    }
  );

  return (
    <>
      <div className="mt-6 space-y-6">

        {/* Heading */}
        <div
  className="
  bg-white/70
  backdrop-blur-xl

  border
  border-white/50

  rounded-2xl
  sm:rounded-3xl

  shadow-xl

  p-5
  sm:p-6
  lg:p-8
  "
>
  <div
    className="
    flex
    flex-col
    lg:flex-row

    lg:items-center
    lg:justify-between

    gap-4
    "
  >
    <div>
      <h1
        className="
        text-xl
        sm:text-xl
        lg:text-2xl

        font-bold

        text-slate-800
        "
      >
        Attendance Management
      </h1>

      {/* <p
        className="
        mt-2

        text-sm
        sm:text-base

        text-slate-500
        "
      >
        Track, manage and monitor daily student attendance.
      </p> */}
    </div>

    <div
      className="
      flex
      items-center
      gap-3

      text-sm
      sm:text-base
      "
    >
      <div className="px-4 py-2 rounded-2xl bg-green-100 text-green-700 font-semibold">
        Total Records : {attendance.length}
      </div>
    </div>
  </div>
</div>

        {/* Search */}
        <AttendanceSearch
          onMarkAttendance={() =>
            setShowAdd(true)
          }
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Summary */}
        <AttendanceSummary
          attendance={filteredAttendance}
        />

        {/* Table */}
        <AttendanceTable
          attendance={filteredAttendance}
          setAttendance={setAttendance}
          setViewAttendance={setViewAttendance}
          setEditAttendance={setEditAttendance}
          setDeleteAttendance={setDeleteAttendance}
        />
      </div>

      {/* Mark */}
      <MarkAttendanceModal
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        attendance={attendance}
        setAttendance={setAttendance}
      />

      {/* View */}
      <ViewAttendanceModal
        attendance={viewAttendance}
        onClose={() =>
          setViewAttendance(null)
        }
      />

      {/* Edit */}
      <EditAttendanceModal
        attendance={editAttendance}
        attendanceData={attendance}
        setAttendance={setAttendance}
        onClose={() =>
          setEditAttendance(null)
        }
      />

      {/* Delete */}
      <DeleteAttendanceModal
        attendance={deleteAttendance}
        attendanceData={attendance}
        setAttendance={setAttendance}
        onClose={() =>
          setDeleteAttendance(null)
        }
      />
    </>
  );
};

export default Attendance;