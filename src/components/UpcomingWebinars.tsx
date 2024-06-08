"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={webinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-green-500 rounded-md shadow-lg group hover:from-green-500 hover:to-blue-500"
          >
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform bg-white opacity-10 -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative">View All Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const webinars = [
  {
    title: "Enhanced Learning Experience",
    description:
      "Join us to learn how Harmony Hub has completely transformed the way music is taught. Discover our interactive lessons and real-time feedback mechanisms.",
    slug: "enhanced-learning-experience",
    isFeatured: true,
  },
  {
    title: "Real Classroom Feel",
    description:
      "Experience our live classes that replicate a real classroom environment. Engage with knowledgeable instructors and get instant support.",
    slug: "real-classroom-feel",
    isFeatured: true,
  },
  {
    title: "Motivated Learning",
    description:
      "Learn how to track your progress effortlessly and stay motivated with Harmony Hub's personalized curriculum. This webinar is a game-changer for your musical journey.",
    slug: "motivated-learning",
    isFeatured: false,
  },
  {
    title: "Rich Resources",
    description:
      "Explore the comprehensive resources available on Harmony Hub. Never run out of new material to learn and practice, keeping your learning experience rich and diverse.",
    slug: "rich-resources",
    isFeatured: true,
  },
  {
    title: "User-Friendly Platform",
    description:
      "Discover how Harmony Hub's intuitive platform is designed for both beginners and advanced musicians. Join our webinar to see how easy it is to navigate and learn.",
    slug: "user-friendly-platform",
    isFeatured: false,
  },
  {
    title: "Efficient Teaching",
    description:
      "For instructors: Learn how to provide real-time feedback to your students and make teaching more efficient with Harmony Hub. Join us to explore the tools available.",
    slug: "efficient-teaching",
    isFeatured: false,
  },
  {
    title: "Skill Expansion",
    description:
      "Join our webinar to see how Harmony Hub's diverse range of courses can help you expand your musical skills in ways you never imagined.",
    slug: "skill-expansion",
    isFeatured: true,
  },
  {
    title: "Excellent Support",
    description:
      "Learn about the responsive and helpful support team at Harmony Hub. Discover how we ensure a smooth and enriching learning experience for all users.",
    slug: "excellent-support",
    isFeatured: false,
  },
];

export default UpcomingWebinars;
