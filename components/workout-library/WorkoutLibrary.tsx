import { getWorkouts } from "../../lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="mx-auto w-full max-w-[1232px] px-0 pb-20 pt-[40px]"
    >
      {/* Section Header */}
      <div className="border-t border-dashed border-[#344000] pt-[10px]">
        <h2
          className="text-[23px] uppercase leading-none text-white"
          style={{
            fontFamily:
              "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
          }}
        >
          The Library
        </h2>

        <p className="mt-[4px] text-[9px] text-[#85878c]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="mt-[20px] grid grid-cols-3 gap-[24px]">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}