"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import liveClassImg from "../../public/live-class.jpg"

const content = [
  {
    title: "Interactive Learning",
    description:
      "Engage with our dynamic, interactive lessons designed to enhance your music learning experience. Collaborate with instructors and peers, share ideas, and progress quickly. Harmony Hub streamlines your learning journey, making it productive and enjoyable.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Interactive Learning
      </div>
    ),
  },
  {
    title: "Live Classes",
    description:
      "Join live classes and see changes in real-time. With Harmony Hub, you can interact with instructors, get instant feedback, and stay updated with the latest lessons. Eliminate confusion and enjoy a seamless learning experience with real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={liveClassImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live class demo"
        />
      </div>
    ),
  },
  {
    title: "Track Your Progress",
    description:
      "Monitor your progress with our integrated tracking system. Harmony Hub ensures you stay on top of your learning goals, with real-time updates and version control that keeps your lessons organized and up-to-date.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Track Your Progress
      </div>
    ),
  },
  {
    title: "Comprehensive Resources",
    description:
      "Access a wide range of resources tailored to enhance your music education. From sheet music to practice tools, Harmony Hub provides everything you need to avoid running out of content and keep your learning experience rich and diverse.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Comprehensive Resources
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;