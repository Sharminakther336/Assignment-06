interface PlanStatsProps {
  planCount: number;
  savedCount: number;
}

export default function PlanStats({
  planCount,
  savedCount,
}: PlanStatsProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      <div className="border border-[#30343a] bg-[#15171c] px-5 py-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
          In Today's Plan
        </p>

        <p className="mt-2 text-[28px] font-black leading-none text-[#ccff00]">
          {planCount}
        </p>
      </div>

      <div className="border border-[#30343a] bg-[#15171c] px-5 py-5">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
          Saved For Later
        </p>

        <p className="mt-2 text-[28px] font-black leading-none text-white">
          {savedCount}
        </p>
      </div>
    </div>
  );
}
