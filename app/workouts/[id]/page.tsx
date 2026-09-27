import Image from "next/image";
import Link from "next/link";
import { getWorkoutById } from "../../../lib/api";
import WorkoutActions from "../../../components/workout-details/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1232px]">
        <Link
          href="/"
          className="mb-6 inline-flex text-[9px] font-bold uppercase text-[#85878c] transition hover:text-[#ccff00]"
        >
          ? Back to workouts
        </Link>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden border border-[#30343a] bg-[#15171c]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-[2px] bg-[#ccff00] px-2 py-1 text-[8px] font-black uppercase text-[#0b0c0e]"
                >
                  {muscle}
                </span>
              ))}

              <span className="rounded-[2px] border border-[#44464c] px-2 py-1 text-[8px] font-bold uppercase text-[#85878c]">
                {workout.difficulty}
              </span>
            </div>

            <h1
              className="mt-5 text-[42px] uppercase leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              {workout.name}
            </h1>

            <p className="mt-4 max-w-[520px] text-[12px] leading-[1.7] text-[#85878c]">
              {workout.description}
            </p>

            <div className="mt-8 border-y border-[#30343a]">
              <div className="grid grid-cols-2">
                <Spec label="Equipment" value={workout.equipment} />
                <Spec label="Difficulty" value={workout.difficulty} />
                <Spec label="Sets" value={String(workout.sets)} />
                <Spec label="Reps" value={String(workout.reps)} />
                <Spec label="Duration" value={`${workout.duration} min`} />
                <Spec
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />
                <Spec label="Rating" value={`? ${workout.rating}`} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-[11px] font-black uppercase tracking-[0.08em] text-[#ccff00]">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[11px] leading-[1.5] text-[#a7a9ae]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[#44464c] text-[8px] font-bold text-[#ccff00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </section>
      </div>
    </main>
  );
}

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-r border-[#30343a] px-4 py-4">
      <p className="text-[7px] font-bold uppercase tracking-[0.08em] text-[#85878c]">
        {label}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase text-white">
        {value}
      </p>
    </div>
  );
}
