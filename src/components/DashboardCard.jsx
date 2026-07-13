const DashboardCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      sm:rounded-3xl

      bg-white/70
      backdrop-blur-xl

      border
      border-white/50

      p-4
      sm:p-5
      lg:p-6

      shadow-lg
      hover:shadow-2xl

      transition-all
      duration-500
      hover:-translate-y-2
      hover:scale-[1.02]
      "
    >
      {/* Gradient Glow */}
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-r ${color} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500`}
      />

      {/* Decorative Circle */}
      <div
        className={`absolute top-0 right-0 w-28 h-28 rounded-full bg-gradient-to-r ${color} opacity-10`}
      />

      <div className="relative flex items-center justify-between">

        {/* Left */}
        <div className="flex-1 min-w-0">

          <p
            className="
            text-xs
            sm:text-sm
            font-medium
            text-slate-500
            truncate
            "
          >
            {title}
          </p>

          <h2
            className="
            mt-2

            text-2xl
            sm:text-3xl
            lg:text-4xl

            font-bold
            text-slate-800
            break-words
            "
          >
            {value}
          </h2>

        </div>

        {/* Right */}
        <div
          className={`
          ml-3

          w-12
          h-12

          sm:w-14
          sm:h-14

          lg:w-16
          lg:h-16

          rounded-xl
          sm:rounded-2xl

          bg-gradient-to-r
          ${color}

          flex
          items-center
          justify-center

          text-lg
          sm:text-xl
          lg:text-2xl

          text-white

          shadow-lg

          transition-all
          duration-500

          group-hover:rotate-12
          group-hover:scale-110
          `}
        >
          {icon}
        </div>

      </div>

      {/* Bottom Line */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${color} group-hover:w-full transition-all duration-500`}
      />
    </div>
  );
};

export default DashboardCard;