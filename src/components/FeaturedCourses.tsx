"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 my-4 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={course.title}
                  />
                  <Link
                    href={`/courses/`}
                    className="border py-2 px-4 rounded-md"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
      <Link
        href="/courses"
        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-green-500 rounded-md shadow-lg group hover:from-green-500 hover:to-blue-500"
      >
        <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform bg-white opacity-10 -translate-x-full group-hover:translate-x-0"></span>
        <span className="relative">View All Courses</span>
      </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
