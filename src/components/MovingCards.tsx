"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Harmony Hub has completely transformed the way I learn music. The interactive lessons and real-time feedback are fantastic!",
    title: "Enhanced Learning Experience",
    name: "Sarah Thompson",
  },
  {
    quote:
      "The live classes are incredible. I feel like I'm in a real classroom, and the instructors are so knowledgeable and supportive.",
    title: "Real Classroom Feel",
    name: "James Rodriguez",
  },
  {
    quote:
      "Thanks to Harmony Hub, I can track my progress easily and stay motivated. The personalized curriculum is a game-changer!",
    title: "Motivated Learning",
    name: "Emily Clark",
  },
  {
    quote:
      "The comprehensive resources available on Harmony Hub are unmatched. I never run out of new material to learn and practice.",
    title: "Rich Resources",
    name: "Michael Smith",
  },
  {
    quote:
      "Harmony Hub's platform is intuitive and user-friendly. It's perfect for both beginners and advanced musicians.",
    title: "User-Friendly Platform",
    name: "Olivia Johnson",
  },
  {
    quote:
      "As a music instructor, I appreciate the ability to provide real-time feedback to my students. Harmony Hub has made teaching more efficient.",
    title: "Efficient Teaching",
    name: "Daniel Williams",
  },
  {
    quote:
      "The diverse range of courses offered by Harmony Hub has helped me expand my musical skills in ways I never imagined.",
    title: "Skill Expansion",
    name: "Sophia Martinez",
  },
  {
    quote:
      "The support team at Harmony Hub is always responsive and helpful. They truly care about their users' learning experience.",
    title: "Excellent Support",
    name: "David Lee",
  },
];

const MovingCards = () => {
  return (
    <div className="h-[45rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCards;
