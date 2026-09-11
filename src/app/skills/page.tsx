"use client";

import { useEffect, useState } from "react";
import AnimatedLetters from "@/components/AnimatedLetters";
import Cubes from "@/components/Cubes";
import Loader from "@/components/Loader";

export default function Skills() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={[..."Skills"]}
            idx={7}
            letterClass={letterClass}
          />
        </h1>
        <p>
          I&apos;m all about building sleek and efficient web applications with the
          latest front-end technologies. Here are my main tools of the trade:
        </p>
        <ul>
          <li className="li">
            <span className="tech-tag">Next.js</span> &ndash; Crafting scalable and
            SEO-friendly web apps
          </li>
          <li className="li">
            <span className="tech-tag">TypeScript</span> &ndash; Bringing type safety
            and cleaner code to the table
          </li>
          <li className="li">
            <span className="tech-tag">Tailwind CSS</span> &ndash; Designing responsive
            and stylish interfaces effortlessly
          </li>
          <li className="li">
            <span className="tech-tag">Redux Toolkit</span> &ndash; Effortless state
            management for complex apps
          </li>
          <li className="li">
            <span className="tech-tag">Socket.IO</span> &ndash; Adding real-time,
            interactive features to enhance user experience
          </li>
        </ul>
        <p>
          While I&apos;m not a designer, I have a keen eye for aesthetics and excel
          in creating intuitive, responsive designs. I&apos;m passionate about
          writing optimized code and always strive to deliver the best user
          experience. Committed and reliable, I bring energy and dedication to
          every project I tackle.
        </p>
        <p>
          Visit my{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marwan-zayed-4b1554213/"
          >
            LinkedIn{" "}
          </a>
          profile for more details. Also you can checkout my CV on this
          <a
            target="_blank"
            download=""
            href="https://coral-shaun-69.tiiny.site"
          >
            link
          </a>
          .
        </p>
      </div>
      <Cubes />
      <Loader />
    </div>
  );
}
