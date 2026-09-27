"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const workoutActive = pathname === "/";
  const planActive = pathname === "/my-plan";

  return (
    <header className="w-full bg-[#0b0c0e] px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-[64px] w-full max-w-[932px] items-center border border-[#24262b] bg-[#101114] px-5 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="FitLog"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6.5 4.5L4.5 6.5"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 7L5.5 9.5"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17.5 14.5L15 17"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19.5 17.5L17.5 19.5"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7.5 8.5L15.5 16.5"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 5L7 2"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M17 22L20 19"
              stroke="#CCFF00"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-[14px] font-black tracking-[-0.04em] text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-[7px] text-[10px] font-bold uppercase tracking-[0.01em] transition ${
              workoutActive
                ? "bg-[#182500] text-[#ccff00]"
                : "text-[#85878c] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-[7px] text-[10px] font-bold uppercase tracking-[0.01em] transition ${
              planActive
                ? "bg-[#182500] text-[#ccff00]"
                : "text-[#85878c] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Counters */}
        <div className="ml-auto flex items-center gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[10px] font-medium text-[#85878c] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black leading-none text-[#0b0c0e]">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-[10px] font-medium text-[#85878c] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[16px] min-w-[16px] items-center justify-center rounded-full border border-[#44464c] px-1 text-[9px] leading-none text-[#a7a9ae]">
              0
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex justify-center py-3 sm:hidden">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-[9px] font-bold uppercase ${
              workoutActive
                ? "bg-[#182500] text-[#ccff00]"
                : "text-[#85878c]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-[9px] font-bold uppercase ${
              planActive
                ? "bg-[#182500] text-[#ccff00]"
                : "text-[#85878c]"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}