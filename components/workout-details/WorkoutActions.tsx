"use client";

import { useState } from "react";
import { Workout } from "../../types/workout";
import { addToPlan, saveWorkout } from "../../lib/storage/storage";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const [planAdded, setPlanAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleAddToPlan() {
    try {
      const result = addToPlan(workout);

      if (result) {
        setPlanAdded(true);
        window.dispatchEvent(new Event("fitlog-storage"));
      } else {
        setPlanAdded(true);
      }
    } catch (error) {
      console.error(error);
      alert("ERROR: " + String(error));
    }
  }

  function handleSave() {
    try {
      const result = saveWorkout(workout);

      if (result) {
        setSaved(true);
        window.dispatchEvent(new Event("fitlog-storage"));
      } else {
        setSaved(true);
      }
    } catch (error) {
      console.error(error);
      alert("ERROR: " + String(error));
    }
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="inline-flex h-10 items-center justify-center rounded-[3px] bg-[#ccff00] px-5 text-[9px] font-black uppercase text-[#0b0c0e]"
      >
        {planAdded ? "Added to Plan" : "+ Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="inline-flex h-10 items-center justify-center rounded-[3px] border border-[#44464c] px-5 py-3 text-[10px] font-black uppercase text-white"
      >
        {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
