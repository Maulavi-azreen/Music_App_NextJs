'use client'; // Indicates this is a Client Component
import { use } from 'react'; // Import use from React
import coursesData from '@/data/music_courses.json'; // Adjust path as needed
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Import 3D card components
import Footer from '@/components/Footer';

// Define the Course type based on your JSON structure
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

// Define the type for params as a Promise
type Params = Promise<{ category: string }>;

export default function Page({ params }: { params: Params }) {
  // Unwrap the params Promise using React.use()
  const { category } = use(params);

  // Filter courses based on category
  const filteredCourses: Course[] =
    category === 'courses'
      ? coursesData.courses // Show all courses for "/courses"
      : coursesData.courses.filter((course: Course) =>
          course.category === category
        );

  // Format the category title (e.g., "basic-music-theory" -> "Basic Music Theory")
  const pageTitle =
    category === 'courses'
      ? 'All Courses'
      : category
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ') || 'Courses';

  return (
    <>
      <div className="min-h-screen bg-black dark:bg-black py-12 pt-36">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-neutral-800 dark:text-white mb-12">
          {pageTitle}
        </h1>

        {/* Grid Container for 3 Cards per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCourses.map((course) => (
            <CardContainer key={course.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                {/* Course Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {course.title}
                </CardItem>

                {/* Course Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {course.description}
                </CardItem>

                {/* Course Image */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${course.title} thumbnail`}
                  />
                </CardItem>

                {/* Instructor and Price */}
                <CardItem
                  translateZ="60"
                  className="text-sm text-neutral-600 dark:text-neutral-300 mt-4"
                >
                  Instructor: {course.instructor}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-sm text-neutral-600 dark:text-neutral-300 mt-1"
                >
                  Price: ${course.price}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}