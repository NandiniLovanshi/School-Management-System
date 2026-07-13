import { useState } from "react";
import { FaTimes } from "react-icons/fa";


const AddFeesModal = ({
  isOpen,
  onClose,
  fees,
  setFees,
}) => {


  const [formData, setFormData] = useState({

    name: "",
    rollNo: "",
    class: "",
    amount: "",
    date: "",
    status: "Pending",

  });




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = (e) => {

    e.preventDefault();



    const newFee = {

      id: Date.now(),

      ...formData,

      amount: Number(formData.amount),

    };




    setFees([

      ...fees,

      newFee,

    ]);





    setFormData({

      name: "",

      rollNo: "",

      class: "",

      amount: "",

      date: "",

      status: "Pending",

    });



    onClose();

  };





  if(!isOpen)
  {
    return null;
  }





  return (

    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">


      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-8">



        {/* Header */}

        <div className="flex justify-between items-center mb-6">


          <h2 className="text-3xl font-bold text-slate-800">
            Add Fees
          </h2>



          <button

            onClick={onClose}

            className="text-red-500 text-xl"

          >

            <FaTimes />

          </button>


        </div>







        <form

          onSubmit={handleSubmit}

          className="grid grid-cols-2 gap-5"

        >





          <input

            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Student Name"

            className="p-3 border rounded-xl"

            required

          />





          <input

            type="text"

            name="rollNo"

            value={formData.rollNo}

            onChange={handleChange}

            placeholder="Roll Number"

            className="p-3 border rounded-xl"

            required

          />






          <input

            type="text"

            name="class"

            value={formData.class}

            onChange={handleChange}

            placeholder="Class"

            className="p-3 border rounded-xl"

            required

          />






          <input

            type="number"

            name="amount"

            value={formData.amount}

            onChange={handleChange}

            placeholder="Fee Amount"

            className="p-3 border rounded-xl"

            required

          />






          <input

            type="date"

            name="date"

            value={formData.date}

            onChange={handleChange}

            className="p-3 border rounded-xl"

            required

          />







          <select

            name="status"

            value={formData.status}

            onChange={handleChange}

            className="p-3 border rounded-xl"

          >


            <option value="Paid">
              Paid
            </option>


            <option value="Pending">
              Pending
            </option>


          </select>








          <div className="col-span-2 flex justify-end gap-4 mt-4">



            <button

              type="button"

              onClick={onClose}

              className="px-6 py-3 bg-gray-300 rounded-xl"

            >

              Cancel

            </button>






            <button

              type="submit"

              className="px-6 py-3 bg-green-500 text-white rounded-xl"

            >

              Save Fees

            </button>



          </div>





        </form>




      </div>



    </div>

  );

};


export default AddFeesModal;