"use client";

import { useEffect, useState } from "react";
import PlanHeader from "../../components/my-plan/PlanHeader/PlanHeader";
import PlanStats from "../../components/my-plan/PlanStats/PlanStats";
import PlanTabs from "../../components/my-plan/PlanTabs/PlanTabs";
import PlanCard from "../../components/my-plan/PlanCard/PlanCard";
import EmptyState from "../../components/my-plan/EmptyState/EmptyState";
import {
  getPlan,
  getSaved,
  removeFromPlan,
  removeFromSaved,
} from "../../lib/storage/storage";
import { Workout } from "../../types/workout";

export default function MyPlanPage() {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  useEffect(() => {
    function loadData() {
      setPlan(getPlan());
      setSaved(getSaved());
    }

    loadData();

    window.addEventListener("fitlog-storage", loadData);

    return () => {
      window.removeEventListener("fitlog-storage", loadData);
    };
  }, []);

  function handleRemove(id: number) {
    if (activeTab === "plan") {
      removeFromPlan(id);
      setPlan(getPlan());
    } else {
      removeFromSaved(id);
      setSaved(getSaved());
    }

    window.dispatchEvent(new Event("fitlog-storage"));
  }

  const currentItems = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1232px]">
        <PlanHeader />

        <PlanStats
          exercises={plan.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        <PlanTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {currentItems.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}