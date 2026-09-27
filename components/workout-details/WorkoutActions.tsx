"use client";

import { useState } from "react";
import { Workout } from "../../types/workout";
import {
  addToPlan,
  saveWorkout,
} from "../../lib/storage/storage";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const [planAdded, setPlanAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleAddToPlan() {
    const added = addToPlan(workout);

    if (added) {
      setPlanAdded(true);
    }
  }

  function handleSave() {
    const added = saveWorkout(workout);

    if (added) {
      setSaved(true);
    }
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={planAdded}
        className="rounded-[3px] bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase text-[#0b0c0e] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {planAdded ? "Added to Plan" : "+ Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={saved}
        className="rounded-[3px] border border-[#44464c] px-5 py-3 text-[10px] font-black uppercase text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saved ? "Saved" : "? Save for later"}
      </button>
    </div>
  );
}
