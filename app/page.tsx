"use client";

import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { useTheme } from "next-themes";
import '../styles/globals.css'

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-4">
      {/* Hero Section */}
      <div className="gap-8 md:gap-16 max-w-4xl flex flex-col md:flex-row">
        <div className="inline-block md:max-w-xs max-w-xl">
          <h1 className="text-5xl	div-4xl font-bold">
            Block distractions,{" "}            <span className="div-violet-600">while you focus on one task</span>
          </h1>          <p className="mt-4 div-lg div-gray-600">
            Block distracting apps, focus on your to-do list and get more things done with our dopamine detox features.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                color="primary"
              >
                Get lifetime deal for $20
              </Button>
            </Link>
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
      
      {/* Call to Action */}
      <div className="mt-16 div-center" id="video">
        <h2 className="div-3xl text-center font-bold">Watch Zendo in action</h2>
        <div className="mt-8 w-full">
          <iframe
            width="560" height="315"
            src="https://www.youtube.com/embed/jt4Xcy2s-YU?si=RESmKmVT1bys9oie"
            title="Zendo - Focus Mode"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jt4Xcy2s-YU?si=RESmKmVT1bys9oie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

        </div>
        <div className="mt-4 text-center">
          Have a feature idea? <Link target="_blank" href="https://tally.so/r/3EDr7L">Share it</Link> and help improve the app.
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
          <img src={theme === "dark" ? "/features/ZendoBlockDistractionsDark.svg" : "/features/ZendoBlockDistractions.svg"} alt="Block Distractions" className="h-64 w-auto" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Break down tasks</h2>
          <p className="div-lg">
            Tackle projects step-by-step with task breakdowns that simplify anything you're working on.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={theme === "dark" ? "/features/ZendoTaskBreakdownDark.svg" : "/features/ZendoTaskBreakdown.svg"} alt="Task breakdown" className="h-64 w-auto" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Seamless syncing</h2>
          <p className="div-lg">
            Sync your work across all devices for a smooth, uninterrupted workflow.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={theme === "dark" ? "/features/ZendoSeamlessSyncingDark.svg" : "/features/ZendoSeamlessSyncing.svg"} alt="Syncing" className="h-64 w-auto" />
        </div>

        {/* <div className="flex flex-col gap-4">
          <h2 className="div-2xl font-bold">Daily streaks for consistent progress</h2>
          <p className="div-lg">
            Stay on track with streak tracking that motivate you to maintain consistent progress and build productive habits.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/features/check-ins.png" alt="Check-ins" className="h-48 w-auto" />
        </div> */}

      </div>

      {/* Lifetime Prelaunch Deal */}
      <div className="mt-16 div-center" id="lifetime-deal">
        <h2 className="div-3xl text-center font-bold">Lifetime Prelaunch Deal</h2>
        <p className="mt-4 text-center text-lg">
          Get Zendo for a one-time payment of <span className="font-bold">$20</span> and enjoy all the features forever!

          Pricing will be $4/month after launch.
        </p>
        <div className="mt-8 w-full text-center">
          <Link
              href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                color="primary"
                className="mx-auto text-center mt-4"
                target="_blank"
                href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl"    
              >
                Get lifetime deal for $20
              </Button>
            </Link>
        </div>
      </div>


      

      {/* Final Call to Action */}
      {/* <div className="mt-16 div-center text-center">
        <h3 className="div-2xl font-bold">Stay on track, eliminate distractions</h3>
        <Button
          className="mx-auto text-center mt-4"
          color="primary"
          target="_blank"
          href="https://buy.stripe.com/6oE4iHeaX4P85hK4gl"
        >
          Get lifetime deal for $20 now
        </Button>
      </div> */}
    </section>
  );
}
