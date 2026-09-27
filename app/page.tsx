import Hero from "../components/hero/Hero";
import WorkoutLibrary from "../components/workout-library/WorkoutLibrary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      <Hero />
      <WorkoutLibrary />
    </main>
  );
}