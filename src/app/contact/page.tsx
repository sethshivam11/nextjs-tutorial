"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="h-auto min-h-screen w-full rounded-md bg-gray-900 relative flex flex-col items-center justify-center antialiased  py-12 pt-36">
      <div className="max-w-2xl mx-auto p-4 flex justify-center items-center flex-col">
        <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center relative z-10">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <input
          type="text"
          placeholder="Your email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-3 text-xl"
        />
        <textarea
          placeholder="Your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-3 text-xl"
        />
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mx-auto mt-10">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-xl font-medium text-white backdrop-blur-3xl px-3 py-2">
            <span className="px-6 py-3">Submit</span>
          </span>
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
