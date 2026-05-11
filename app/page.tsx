import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <section className="mx-auto w-full max-w-[1440px] px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-[#242424] sm:text-8xl">
              Daily Minty
            </h1>
            <p className="mt-6 text-base font-display text-[#242424]/60 sm:text-lg">
              No more lost receipts, no more missing numbers.
            </p>
            <button type="button" className="font-display mt-8 cursor-pointer rounded-full bg-[#00CBC6] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#00CBC6]/40 transition-colors hover:bg-[#00CBC6]/80">
              Join Waitlist
            </button>
          </div>
          <div>
            <Image
              src="/daily.png"
              alt="Daily Minty"
              width={1374}
              height={773}
              className="h-auto w-full"
              quality={90}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fbe7d2]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Image
                src="/problem.png"
                alt="The Problem"
                width={2526}
                height={1548}
                className="h-auto w-full"
                quality={100}
              />
            </div>
            <div className="rounded-3xl bg-[#fff7ec] p-8 sm:p-10">
              <div className="inline-block rounded-full bg-[#f4d4b3] px-4 py-1.5">
                <span className="font-display text-xs font-bold tracking-wider text-[#d96a3a]">
                  THE PROBLEM
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl font-bold text-[#242424] sm:text-4xl">
                Stuck in a <span className="text-[#d96a3a]">messy</span> and{" "}
                <span className="text-[#d96a3a]">tiring</span> routine. Enjoy a
                simple and fresh day-end.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Rushed entries at closing",
                  "Numbers don't match",
                  "Extra time fixing mistakes",
                  "Stress follows you home",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined flex-none text-2xl text-[#d96a3a]"
                      aria-hidden="true"
                    >
                      close
                    </span>
                    <span className="font-display text-base text-[#242424]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24">
          <h2 className="font-display text-center text-4xl font-bold text-[#242424] sm:text-5xl">
            Minty helps you close the day,{" "}
            <br />
            everyday.
          </h2>
          <p className="mt-6 text-center text-base font-display text-[#242424]/60 sm:text-lg">
            Three methods. One go-to dashboard. Zero spreadsheet trauma.
          </p>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                img: "/numbers.png",
                width: 2400,
                height: 1933,
                title: "Enter today's numbers",
                description:
                  "You'll be making and entering quickly in a clean, guided interface.",
              },
              {
                img: "/cash.png",
                width: 2666,
                height: 1777,
                title: "Check the cash",
                description:
                  "Count your draw amount + Minty does the math along side you.",
              },
              {
                img: "/report.png",
                width: 2379,
                height: 1778,
                title: "Get a clean daily report",
                description:
                  "A clean, accurate summary that's ready to review, share or export.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-gray-200 p-8 text-center"
              >
                <div className="relative aspect-square">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="mx-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d6efe8]">
                  <span className="font-display text-base font-bold text-[#24a08f]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[#242424]">
                  {step.title}
                </h3>
                <p className="mt-3 font-display text-sm text-[#242424]/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
