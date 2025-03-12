'use client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const FeaturedWebinar = () => {
    const musicWebinars = [
        {
          title: "Mastering Guitar Techniques",
          description:
            "Learn advanced guitar techniques with industry experts. Perfect your solos, chord progressions, and speed with precision.",
          link: "/webinars/guitar-masterclass",
        },
        {
          title: "Vocal Mastery: Find Your Voice",
          description:
            "Unlock your vocal potential with proven breathing techniques, pitch control exercises, and performance tips.",
          link: "/webinars/vocal-mastery",
        },
        {
          title: "Music Production Essentials",
          description:
            "Explore DAW techniques, beat-making fundamentals, and creative sound design for aspiring music producers.",
          link: "/webinars/music-production",
        },
        {
          title: "DJ Mixing & Live Performance",
          description:
            "Master the art of DJing with expert tips on beat matching, transitions, and crowd engagement.",
          link: "/webinars/dj-mixing",
        },
        {
          title: "Songwriting Workshop",
          description:
            "Unlock your creativity with tips on lyric writing, melody creation, and emotional storytelling through music.",
          link: "/webinars/songwriting",
        },
        {
          title: "Film Scoring & Sound Design",
          description:
            "Learn the art of composing powerful scores for films, video games, and visual media with cinematic impact.",
          link: "/webinars/film-scoring",
        },
      ];
  return (
    <>
        <div className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Featured <span className="text-cyan-400">Webinars</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
              Dive into expert-led webinars designed to elevate your musical journey. 
              Whether you are a beginner or a pro, there is something for everyone.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={musicWebinars} />
          </div>
        </div>
      </>
  )
}

export default FeaturedWebinar
