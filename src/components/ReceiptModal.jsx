import { FaTimes, FaPrint } from "react-icons/fa";


const ReceiptModal = ({
  isOpen,
  onClose,
  receiptFees,
}) => {


  if(!isOpen){
    return null;
  }


  const handlePrint = () => {
    window.print();
  };


  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">


      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">


        {/* Header */}

        <div className="flex justify-between items-center mb-6">


          <h2 className="text-3xl font-bold text-slate-800">
            Fee Receipt
          </h2>


          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            <FaTimes/>
          </button>


        </div>



        {/* Receipt */}

        <div className="border rounded-2xl p-5 space-y-3">


          <h3 className="text-xl font-bold text-center">
            ABC School
          </h3>


          <p>
            Student Name :
            <b> {receiptFees.name}</b>
          </p>


          <p>
            Roll No :
            <b> {receiptFees.rollNo}</b>
          </p>


          <p>
            Class :
            <b> {receiptFees.class}</b>
          </p>


          <p>
            Amount :
            <b> ₹{receiptFees.amount}</b>
          </p>


          <p>
            Date :
            <b> {receiptFees.date}</b>
          </p>


          <p>
            Status :
            <b> {receiptFees.status}</b>
          </p>


        </div>




        <button

          onClick={handlePrint}

          className="mt-6 w-full flex justify-center items-center gap-2 bg-green-500 text-white py-3 rounded-xl"

        >

          <FaPrint/>

          Print Receipt

        </button>



      </div>


    </div>

  );

};


export default ReceiptModal;