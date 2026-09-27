import Image from "next/image";
import bannerImage from "../../assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-[#0b0c0e]">
      <div className="mx-auto w-full max-w-[1232px]">
        <div className="relative h-[448px] overflow-hidden bg-[#15171c]">
          {/* Figma inner dashed border */}
          <div className="pointer-events-none absolute inset-[12px] border border-dashed border-[#344000]" />

          {/* Hero Content */}
          <div className="relative flex h-full items-center px-[38px]">
            <div className="relative z-10 w-[58%]">
              <p className="mb-[14px] text-[8px] font-bold uppercase tracking-[0.08em] text-[#ccff00]">
                Workout Library
              </p>

              <h1
                className="max-w-[470px] text-[39px] uppercase leading-[0.92] tracking-[-0.025em] text-white"
                style={{
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
                Train With Intent. Log
                <br />
                Every Set.
              </h1>

              <p className="mt-[14px] max-w-[390px] text-[9px] leading-[1.5] text-[#85878c]">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <a
                href="#library"
                className="mt-[17px] inline-flex h-[27px] items-center justify-center rounded-[3px] bg-[#ccff00] px-[14px] text-[8px] font-black uppercase tracking-[0.01em] text-[#0b0c0e] transition hover:bg-[#b8e600]"
              >
                Browse Workouts
              </a>
            </div>

            {/* Hero Image */}
            <div className="absolute right-[45px] top-1/2 h-[250px] w-[280px] -translate-y-1/2">
              <Image
                src={bannerImage}
                alt="Workout banner"
                fill
                priority
                className="object-contain"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}