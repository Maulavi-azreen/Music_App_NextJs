"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/images/piano.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      title: "Real-time Changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/images/guitar.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-time Changes"
          />
        </div>
      ),
    },
    {
      title: "Version Control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/images/vocal.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },
    {
      title: "Your Music Journey Starts Here",
      description:
        "Unlock your musical potential with our all-in-one platform. From beginner lessons to advanced techniques, explore a variety of courses tailored to your style. Whether you're a guitarist, pianist, or producer, our expert instructors will guide you every step of the way. Start learning, create stunning music, and connect with a community of passionate artists.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/images/music.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Music Journey"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 py-10 text-white">
          Why <span className="text-cyan-400">Choose Us</span>
        </h2>
      </div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;