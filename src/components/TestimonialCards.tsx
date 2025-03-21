"use client";
 
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const TestimonialCards = () => {
    const testimonials = [
        {
          quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
          name: "Charles Dickens",
          title: "A Tale of Two Cities",
        },
        {
          quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
          name: "William Shakespeare",
          title: "Hamlet",
        },
        {
          quote: "All that we see or seem is but a dream within a dream.",
          name: "Edgar Allan Poe",
          title: "A Dream Within a Dream",
        },
        {
          quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          name: "Jane Austen",
          title: "Pride and Prejudice",
        },
        {
          quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
          name: "Herman Melville",
          title: "Moby-Dick",
        },
      ];
  return (
    // <div className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
        Hear Our Harmony: <span className="text-cyan-400">Voices of Success</span>
      </h2>
      
      <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
        Discover how our platform has transformed musicians worldwide. From beginners to pros, 
        hear inspiring stories from our community.
      </p>
  
    

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

  
  )
}

export default TestimonialCards
