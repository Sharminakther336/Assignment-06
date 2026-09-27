import Link from "next/link";
import Image from "next/image";
import { Workout } from "../../types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex h-[368px] w-full flex-col overflow-hidden border border-[#30343a] bg-[#15171c]"
    >
      {/* Image */}
      <div className="relative h-[216px] w-full shrink-0 overflow-hidden bg-[#101114]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="395px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-[10px] pb-[10px] pt-[9px]">
        {/* Tags */}
        <div className="flex flex-wrap gap-[4px]">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-[2px] bg-[#ccff00] px-[5px] py-[3px] text-[6px] font-black uppercase leading-none text-[#0b0c0e]"
            >
              {muscle}
            </span>
          ))}

          <span className="rounded-[2px] bg-[#ccff00] px-[5px] py-[3px] text-[6px] font-black uppercase leading-none text-[#0b0c0e]">
            {workout.difficulty}
          </span>
        </div>

        {/* Workout information */}
        <div className="mt-[8px]">
          <h3 className="truncate text-[9px] font-bold uppercase leading-none text-white">
            {workout.name}
          </h3>

          <p className="mt-[5px] truncate text-[7px] leading-none text-[#85878c]">
            {workout.equipment}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-auto flex items-center gap-[7px] text-[6px] leading-none text-[#85878c]">
          <span>{workout.duration} min</span>

          <span className="h-[2px] w-[2px] rounded-full bg-[#55575c]" />

          <span>{workout.caloriesBurned} kcal</span>

          <span className="h-[2px] w-[2px] rounded-full bg-[#55575c]" />

          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}