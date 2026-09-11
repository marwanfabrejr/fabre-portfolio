"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedLetters from "@/components/AnimatedLetters";
import Cubes from "@/components/Cubes";
import Loader from "@/components/Loader";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [..."arwan"];
  const jobArray = [..."Web Developer."];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>Y</span>
          <span className={`${letterClass} _12`}>o</span>
          <span className={`${letterClass} _13`}>o</span>
          <span className={`${letterClass} _14`}>,</span>
          <br />
          <span className={`${letterClass} _15`}>I</span>
          <span className={`${letterClass} _16`}>&apos;</span>
          <span className={`${letterClass} _17`}>m</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-m.png" alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Front End Developer</h2>
        <Link href="/contact">
          <ul>
            <li>
              Contact Me
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </Link>
      </div>
      <Cubes />
      <Loader />
    </div>
  );
}
