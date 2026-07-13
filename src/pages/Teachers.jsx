import { useState, useContext, useEffect } from "react";
import { TeacherContext } from "../context/TeacherContext";
import { useSearchParams } from "react-router-dom";
import TeacherSearch from "../components/TeacherSearch";
import TeacherTable from "../components/TeacherTable";
import AddTeacherModal from "../components/AddTeacherModal";
import EditTeacherModal from "../components/EditTeacherModal";
import ViewTeacherModal from "../components/ViewTeacherModal";
import DeleteTeacherModal from "../components/DeleteTeacherModal";

const Teachers = () => {
  // Teacher Context
  const { teachers, setTeachers } = useContext(TeacherContext);
const [searchParams, setSearchParams] = useSearchParams();
  // Modals
  const [showAdd, setShowAdd] = useState(false);
  const [editTeacher, setEditTeacher] = useState(null);
  const [viewTeacher, setViewTeacher] = useState(null);
  const [deleteTeacher, setDeleteTeacher] = useState(null);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] =
    useState("All Subjects");

  // Search + Filter
  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      teacher.teacherId
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesSubject =
      selectedSubject === "All Subjects" ||
      teacher.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  useEffect(() => {
  if (searchParams.get("open") === "add") {
    setShowAdd(true);

    // URL clean
    setSearchParams({});
  }
}, [searchParams, setSearchParams]);

  return (
    <>
      <div className="mt-6 space-y-5 sm:space-y-6 lg:space-y-8 pb-6">

        {/* Page Header */}

        <div
          className="
          relative
          overflow-hidden

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
          {/* Background Gradient */}

          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 opacity-10 blur-2xl" />

          <div className="relative">
            <h1
              className="
              text-xl
              sm:text-xl
              lg:text-2xl

              font-bold

              text-slate-800
              "
            >
              Teacher Management
            </h1>

            {/* <p
              className="
              mt-2

              text-sm
              sm:text-base

              text-slate-500
              "
            >
              Manage teachers, search records, update information,
              and remove teachers whenever required.
            </p> */}
          </div>
        </div>

        {/* Search */}

        <TeacherSearch
          onAddTeacher={() => setShowAdd(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
        />

        {/* Table */}

        <TeacherTable
          teachers={filteredTeachers}
          setTeachers={setTeachers}
          setEditTeacher={setEditTeacher}
          setViewTeacher={setViewTeacher}
          setDeleteTeacher={setDeleteTeacher}
        />
      </div>

      {/* Add Teacher */}

      <AddTeacherModal
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        teachers={teachers}
        setTeachers={setTeachers}
      />

      {/* Edit Teacher */}

      {editTeacher && (
        <EditTeacherModal
          teacher={editTeacher}
          teachers={teachers}
          setTeachers={setTeachers}
          onClose={() => setEditTeacher(null)}
        />
      )}

      {/* View Teacher */}

      <ViewTeacherModal
        teacher={viewTeacher}
        onClose={() => setViewTeacher(null)}
      />

      {/* Delete Teacher */}

      <DeleteTeacherModal
        teacher={deleteTeacher}
        teachers={teachers}
        setTeachers={setTeachers}
        onClose={() => setDeleteTeacher(null)}
      />
    </>
  );
};

export default Teachers;