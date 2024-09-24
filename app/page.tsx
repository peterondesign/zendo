"use client";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-4">
      {/* Hero Section */}
      <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-4xl">
        <div className="inline-block max-w-xl">
          <h1 className="text-5xl	div-4xl font-bold">
            Block distractions,{" "}            <span className="div-violet-600">while you focus on one task</span>
          </h1>          <p className="mt-4 div-lg div-gray-600">
            Block distracting apps, focus on your to-do list and get more things done with our dopamine detox features.
          </p>
          <div className="mt-6 space-x-4">
            <Button
              color="primary"
              href="#"
            >
              Start for free
            </Button>
            <Link
              className=""
              href="#video"
            >
              Watch video
            </Link>          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-4 rounded-xl">
            <img
              src={theme === "dark" ? "ZendoHeroImage-Dark.svg" : "ZendoHeroImage.svg"}
              alt="Hero image"
              className="h-96 w-auto"
            />
          </div>
        </div>
      </div>
      {/* Feature Sections */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-16 mt-16 max-w-4xl">
        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Block distractions</h2>
          <p className="div-lg">
            Use Focus Mode to block distracting apps, ensuring you stay locked in on what matters most.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/features/task-breakdown.png" alt="Task breakdown" className="h-48 w-auto" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Break down tasks</h2>
          <p className="div-lg">
            Tackle projects step-by-step with task breakdowns that simplify anything you're working on.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/features/task-breakdown.png" alt="Task breakdown" className="h-48 w-auto" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Seamless syncing</h2>
          <p className="div-lg">
         Sync your work across all devices for a smooth, uninterrupted workflow.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/features/sync.png" alt="Syncing" className="h-48 w-auto" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Daily streaks for consistent progress</h2>
          <p className="div-lg">
            Stay on track with streak tracking that motivate you to maintain consistent progress and build productive habits.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/features/check-ins.png" alt="Check-ins" className="h-48 w-auto" />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 div-center" id="video">
        <h2 className="div-3xl text-center font-bold">Watch Zendo in action</h2>
        <div className="mt-8 w-full">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/TpLKhDURaho"
            title="Zendo - Focus Mode"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          Have a feature idea? <Link target="_blank" href="https://tally.so/r/3EDr7L">Share it</Link> and help improve the app.
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-16 div-center text-center">
        <h3 className="div-2xl font-bold">Stay on track, eliminate distractions</h3>
        <Button
          className="mx-auto text-center mt-4"
          color="primary"
          href="#"
        >
          Start for free
        </Button>
      </div>
    </section>
  );
}
