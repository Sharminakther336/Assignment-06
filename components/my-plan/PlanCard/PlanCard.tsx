"use client";

import Image from "next/image";
import Link from "next/link";
import { Workout } from "../../../types/workout";

interface PlanCardProps {
  workout: Workout;
  onRemove: (id: number) => void;
}

export default function PlanCard({
  workout,
  onRemove,
}: PlanCardProps) {
  return (
    <div className="group overflow-hidden border border-[#30343a] bg-[#15171c]">
      <div className="relative h-[180px] w-full overflow-hidden bg-[#101114]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="400px"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-[2px] bg-[#ccff00] px-2 py-1 text-[7px] font-black uppercase leading-none text-[#0b0c0e]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="mt-3 truncate text-[11px] font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-[8px] text-[#85878c]">
          {workout.duration} min / {workout.caloriesBurned} kcal
        </p>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/workouts/${workout.id}`}
            className="flex-1 border border-[#44464c] px-3 py-2 text-center text-[8px] font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={() => onRemove(workout.id)}
            className="border border-[#44464c] px-3 py-2 text-[8px] font-black uppercase text-[#85878c] transition hover:border-red-500 hover:text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
