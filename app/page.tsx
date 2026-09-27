import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] text-white">
      {/* Hero Section */}
      <Hero />

      {/* Library Section */}
      <section
        id="library"
        className="mx-auto max-w-[932px] px-4 pb-20 pt-[40px] sm:px-6"
      >
        <div className="border-t border-dashed border-[#344000] pt-[4px]">
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
      </section>
    </main>
  );
}