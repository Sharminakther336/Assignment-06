import { Workout } from "../../types/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getPlan(): Workout[] {
  if (!isBrowser()) return [];

  const data = localStorage.getItem(PLAN_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data) as Workout[];
  } catch {
    return [];
  }
}

export function getSaved(): Workout[] {
  if (!isBrowser()) return [];

  const data = localStorage.getItem(SAVED_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data) as Workout[];
  } catch {
    return [];
  }
}

export function addToPlan(workout: Workout): boolean {
  const plan = getPlan();

  if (plan.some((item) => item.id === workout.id)) {
    return false;
  }

  localStorage.setItem(
    PLAN_KEY,
    JSON.stringify([...plan, workout])
  );

  return true;
}

export function saveWorkout(workout: Workout): boolean {
  const saved = getSaved();

  if (saved.some((item) => item.id === workout.id)) {
    return false;
  }

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify([...saved, workout])
  );

  return true;
}

export function removeFromPlan(id: number) {
  const plan = getPlan().filter((item) => item.id !== id);

  localStorage.setItem(
    PLAN_KEY,
    JSON.stringify(plan)
  );
}

export function removeFromSaved(id: number) {
  const saved = getSaved().filter((item) => item.id !== id);

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify(saved)
  );
}
