import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import StudentSearch from "../components/StudentSearch";
import StudentTable from "../components/StudentTable";
import AddStudentModal from "../components/AddStudentModal";
import EditStudentModal from "../components/EditStudentModal";
import ViewStudentModal from "../components/ViewStudentModal";
import DeleteStudentModal from "../components/DeleteStudentModal";

import { StudentContext } from "../context/StudentContext";

const Students = () => {

  const { students, setStudents } = useContext(StudentContext);

  const [searchParams, setSearchParams] = useSearchParams();

  // Add Student Modal
  const [showAdd, setShowAdd] = useState(false);

  // Edit Student
  const [editStudent, setEditStudent] = useState(null);

  // View Student
  const [viewStudent, setViewStudent] = useState(null);

  // Delete Student
  const [deleteStudent, setDeleteStudent] = useState(null);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Filter
  const [selectedClass, setSelectedClass] = useState("All Classes");

  // Dashboard se aane par modal open hoga
  useEffect(() => {
    if (searchParams.get("open") === "add") {
      setShowAdd(true);

      // URL se query hata do
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  // Search + Filter
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClass === "All Classes" ||
      student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  return (
    <>
      <div className="mt-6 space-y-5 sm:space-y-6 lg:space-y-8 pb-6">

        {/* Heading */}
        <div
          className="
          bg-white/70
          backdrop-blur-xl
          border
          border-white/50
          rounded-2xl
          sm:rounded-3xl
          p-4
          sm:p-6
          lg:p-7
          shadow-lg
        "
        >
          <h1 className="text-xl sm:text-xl lg:text-2xl font-bold text-slate-800">
            Student Management
          </h1>
        </div>

        {/* Search */}
        <StudentSearch
          onAddStudent={() => setShowAdd(true)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
        />

        {/* Table */}
        <StudentTable
          students={filteredStudents}
          setStudents={setStudents}
          setShowAdd={setShowAdd}
          setEditStudent={setEditStudent}
          setViewStudent={setViewStudent}
          setDeleteStudent={setDeleteStudent}
        />
      </div>

      {/* Add Student */}
      <AddStudentModal
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        students={students}
        setStudents={setStudents}
      />

      {/* Edit Student */}
      {editStudent && (
        <EditStudentModal
          student={editStudent}
          students={students}
          setStudents={setStudents}
          onClose={() => setEditStudent(null)}
        />
      )}

      {/* View Student */}
      <ViewStudentModal
        student={viewStudent}
        onClose={() => setViewStudent(null)}
      />

      {/* Delete Student */}
      <DeleteStudentModal
        student={deleteStudent}
        students={students}
        setStudents={setStudents}
        onClose={() => setDeleteStudent(null)}
      />
    </>
  );
};

export default Students;