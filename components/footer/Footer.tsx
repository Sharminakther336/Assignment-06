import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#202227] bg-[#0b0c0e]">
      <div className="mx-auto flex min-h-[104px] w-full max-w-[1232px] items-center justify-between px-[12px]">
        <Link
          href="/"
          className="flex items-center gap-[8px]"
          aria-label="FitLog home"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="8"
              width="5"
              height="8"
              rx="1"
              fill="#CCFF00"
            />
            <rect
              x="17"
              y="8"
              width="5"
              height="8"
              rx="1"
              fill="#CCFF00"
            />
            <rect
              x="6"
              y="10"
              width="12"
              height="4"
              rx="1"
              fill="#CCFF00"
            />
            <rect
              x="4"
              y="6"
              width="2"
              height="12"
              rx="1"
              fill="#CCFF00"
            />
            <rect
              x="18"
              y="6"
              width="2"
              height="12"
              rx="1"
              fill="#CCFF00"
            />
          </svg>

          <span className="text-[10px] font-black tracking-[-0.03em] text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-right text-[7px] leading-none text-[#55575c]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
