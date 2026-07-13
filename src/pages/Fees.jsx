
import { useState, useContext } from "react";
import { FeesContext } from "../context/FeesContext";
import FeesSearch from "../components/FeesSearch";
import FeesSummary from "../components/FeesSummary";
import FeesTable from "../components/FeesTable";
import AddFeesModal from "../components/AddFeesModal";
import EditFeesModal from "../components/EditFeesModal";
import DeleteFeesModal from "../components/DeleteFeesModal";
import ReceiptModal from "../components/ReceiptModal";

const Fees = () => {

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Status Filter
  const [statusFilter, setStatusFilter] = useState("All");

  // Class Filter
  const [classFilter, setClassFilter] = useState("All");


  // Add Fees Modal
  const [showAddFees, setShowAddFees] = useState(false);
  const { fees, setFees } = useContext(FeesContext);
  const [editFees, setEditFees] = useState(null);
  const [deleteFees, setDeleteFees] = useState(null);
  const [receiptFees, setReceiptFees] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 p-8">


      <div className="space-y-6">


        {/* Heading */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8">

          <h1 className="text-2xl font-bold text-slate-800">
            Fees Management
          </h1>


          {/* <p className="text-slate-500 mt-2">
            Manage student fees, payments and receipts.
          </p> */}


        </div>



        {/* Search */}
        <FeesSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          classFilter={classFilter}
          setClassFilter={setClassFilter}
          onAddFees={() => setShowAddFees(true)}
        />



        {/* Summary */}
        <FeesSummary
          fees={fees}
        />



        {/* Table */}
        <FeesTable
          fees={fees}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          classFilter={classFilter}
          setEditFees={setEditFees}
          setDeleteFees={setDeleteFees}
          setReceiptFees={setReceiptFees}

        />



      </div>




      {/* Add Fees Modal */}
      <AddFeesModal
        isOpen={showAddFees}
        onClose={() => setShowAddFees(false)}
        fees={fees}
        setFees={setFees}
      />
      <EditFeesModal
        isOpen={editFees !== null}
        onClose={() => setEditFees(null)}
        editFees={editFees}
        fees={fees}
        setFees={setFees}
      />
      <DeleteFeesModal

        isOpen={deleteFees !== null}

        onClose={() => setDeleteFees(null)}

        deleteFees={deleteFees}

        fees={fees}

        setFees={setFees}

      />
      <ReceiptModal

        isOpen={receiptFees !== null}

        onClose={() => setReceiptFees(null)}

        receiptFees={receiptFees}

      />

    </div>
  );
};


export default Fees;