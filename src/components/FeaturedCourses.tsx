"use client";
import Image from "next/image";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  image: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Featured Courses</h2>
        <p className="text-gray-400">
          Explore top-rated music courses from world-renowned instructors.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="relative w-full h-48 sm:h-64">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={300}
                  className="rounded-t-[22px]"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p>{course.title}</p>
                <p>{course.description}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  Instructor: <span className="font-medium">{course.instructor}</span>
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  Slug: <span className="font-medium">{course.slug}</span>
                </p>
                <p className="text-lg font-bold text-black dark:text-white mt-4">
                  ${course.price}
                </p>
                <button className="mt-4 rounded-full px-4 py-2 text-white bg-black dark:bg-zinc-800 text-xs font-bold hover:bg-gray-800 transition">
                  Buy Now
                </button>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeaturedCourses;
