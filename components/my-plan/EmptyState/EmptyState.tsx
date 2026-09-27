export default function EmptyState() {
  return (
    <div className="mt-8 border border-dashed border-[#30343a] px-6 py-16 text-center">
      <p className="text-[10px] font-black uppercase text-[#ccff00]">
        Nothing here yet
      </p>

      <h2 className="mt-3 text-[18px] font-black uppercase text-white">
        Build Your Next Session
      </h2>

      <p className="mx-auto mt-2 max-w-[360px] text-[9px] leading-[1.6] text-[#85878c]">
        Browse the workout library and add exercises to your plan or save them
        for later.
      </p>

      <a
        href="/"
        className="mt-5 inline-flex h-9 items-center justify-center rounded-[3px] bg-[#ccff00] px-5 text-[8px] font-black uppercase text-[#0b0c0e]"
      >
        Browse Workouts
      </a>
    </div>
  );
}
