import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";


const FeesSummary = ({ fees = [] }) => {


  const totalCollection = fees
  .filter((fee) => fee.status === "Paid")
  .reduce(
    (total, fee) => total + (parseFloat(fee.amount) || 0),
    0
  );


  const paidCount = fees.filter(
    (fee) => fee.status === "Paid"
  ).length;


  const pendingCount = fees.filter(
    (fee) => fee.status === "Pending"
  ).length;
  console.log(fees);
  fees.forEach((fee) => {
    console.log(fee.amount, typeof fee.amount);
  });

  const cards = [

    {
      title: "Total Collection",
      value: `₹${totalCollection}`,
      icon: <FaMoneyBillWave />,
      color: "from-emerald-400 to-green-600",
    },


    {
      title: "Paid Fees",
      value: paidCount,
      icon: <FaCheckCircle />,
      color: "from-sky-400 to-blue-600",
    },


    {
      title: "Pending Fees",
      value: pendingCount,
      icon: <FaClock />,
      color: "from-yellow-400 to-orange-500",
    },


    {
      title: "Total Records",
      value: fees.length,
      icon: <FaUsers />,
      color: "from-violet-400 to-indigo-600",
    },

  ];



  return (

    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      xl:grid-cols-4 
      gap-5
    ">


      {
        cards.map((card, index) => (

          <div

            key={index}

            className={`
              bg-gradient-to-br 
              ${card.color}
              rounded-3xl
              p-5
              text-white
              shadow-xl
              border
              border-white/20
              backdrop-blur-xl
              hover:-translate-y-2
              transition-all
              duration-300
            `}

          >


            <div className="flex justify-between items-center">


              <div>

                <p className="
                  text-white/80 
                  text-sm
                  font-medium
                ">
                  {card.title}
                </p>


                <h2 className="
                  text-3xl
                  font-bold
                  mt-3
                ">
                  {card.value}
                </h2>


              </div>



              <div className="
                w-14
                h-14
                rounded-2xl
                bg-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-3xl
              ">
                {card.icon}
              </div>


            </div>


          </div>


        ))
      }


    </div>

  );

};


export default FeesSummary;