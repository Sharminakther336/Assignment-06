export default function PlanHeader() {
  return (
    <div className="border-b border-[#30343a] pb-6">
      <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#ccff00]">
        Your Training
      </p>

      <h1
        className="mt-2 text-[38px] uppercase leading-none text-white"
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        My Plan
      </h1>

      <p className="mt-3 max-w-[500px] text-[10px] leading-[1.6] text-[#85878c]">
        Your selected workouts, ready for the next session.
      </p>
    </div>
  );
}
