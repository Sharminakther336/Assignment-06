interface PlanStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

export default function PlanStats({
  exercises,
  minutes,
  calories,
}: PlanStatsProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="border border-[#30343a] bg-[#15171c] px-5 py-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
          Exercises
        </p>

        <p className="mt-2 text-[28px] font-black leading-none text-[#ccff00]">
          {exercises}
        </p>
      </div>

      <div className="border border-[#30343a] bg-[#15171c] px-5 py-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
          Minutes
        </p>

        <p className="mt-2 text-[28px] font-black leading-none text-white">
          {minutes}
        </p>
      </div>

      <div className="border border-[#30343a] bg-[#15171c] px-5 py-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
          Calories
        </p>

        <p className="mt-2 text-[28px] font-black leading-none text-white">
          {calories}
        </p>
      </div>
    </div>
  );
}