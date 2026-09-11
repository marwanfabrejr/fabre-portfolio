"use client";

import { useEffect, useState } from "react";
import AnimatedLetters from "@/components/AnimatedLetters";
import Cubes from "@/components/Cubes";
import Loader from "@/components/Loader";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={[..."About me"]}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <p>
          I&apos;m Marwan Zayed, a 25-year-old Software Developer with a strong
          enthusiasm for web development. I graduated in Computer Science from
          October 6 University&apos;s Faculty of Information Systems and Computer
          Sciences.
        </p>
        <p>
          After graduating, I joined Sphinx Publishing Company as a Front
          Developer, where I created educational curricula, exercises, and
          games for schools across the Middle East using JavaScript, HTML, and
          CSS. This role strengthened my foundation in web development.
        </p>
        <p>
          A year and eight months later, I began working at Blue Holding as a
          Mid-Senior Front End Developer. Here, I develop web applications for
          pharmaceutical and healthcare companies using Next.js, TypeScript,
          and Tailwind CSS.
        </p>
        <p>
          From January to September 2024, I also worked part-time at Blend, a
          Saudi startup, where we built three successful applications to
          streamline restaurant operations. This experience showcased the
          impact of well-designed web solutions.
        </p>
        <p className="lastP">
          I&apos;m always excited to embrace new challenges and grow in the
          ever-evolving world of web development. Let&apos;s create something
          amazing together!
        </p>
      </div>
      <Cubes />
      <Loader />
    </div>
  );
}
