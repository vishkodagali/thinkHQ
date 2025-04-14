'use client';

export default function BlockText() {
  return (
    <section className="w-full bg-zinc-100 px-4 sm:px-8 pt-16 flex flex-col items-start gap-12">
      {/* 🟩 Hero Text */}
      <div className="w-full max-w-[45.125rem]">
        <h1 className="text-zinc-800 leading-[90px] font-open-sans font-normal text-[2.25rem] sm:text-7xl">
          The power of <br></br>
          <span className="font-eb-garamond">collective creativity.</span>
        </h1>
      </div>

      {/* 🟦 Supporting Text */}
      <p className="w-full max-w-[48.9375rem] text-zinc-800 text-left text-[1.5rem] sm:text-4xl font-light font-open-sans">
        People and their incredible diversity are the heart and soul of everything we do.
      </p>
    </section>
  );
}
