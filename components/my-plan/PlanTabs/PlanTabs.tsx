"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  onChange: (tab: "plan" | "saved") => void;
}

export default function PlanTabs({
  activeTab,
  onChange,
}: PlanTabsProps) {
  return (
    <div className="mt-8 flex border-b border-[#30343a]">
      <button
        type="button"
        onClick={() => onChange("plan")}
        className={`px-5 py-3 text-[9px] font-black uppercase transition ${
          activeTab === "plan"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-[#85878c] hover:text-white"
        }`}
      >
        Today's Plan
      </button>

      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`px-5 py-3 text-[9px] font-black uppercase transition ${
          activeTab === "saved"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-[#85878c] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
}
