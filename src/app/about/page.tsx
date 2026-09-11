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
          I&apos;m Marwan Zayed, a Frontend-focused Software Engineer with 4+ years
          of experience building production web applications using React,
          Next.js, TypeScript, and Tailwind CSS. I hold a Bachelor of Computer
          Science and Information Systems from October 6 University.
        </p>
        <p>
          I started my career at Sphinx Publishing, building educational
          websites, applications, exercises, and interactive learning
          experiences for digital curricula and textbooks. Beginning with HTML,
          CSS, and JavaScript, I progressively adopted React and Next.js and
          applied them to production projects, growing into a senior contributor
          role within the team.
        </p>
        <p>
          I then joined Blue Holding as a Frontend Developer, where I built web
          applications and interactive digital experiences for pharmaceutical
          and cosmetics companies across the UAE, Saudi Arabia, and other
          markets. I developed complete features from requirements through
          delivery and contributed to a reusable, customizable LMS platform for
          corporate training.
        </p>
        <p>
          Along the way, I worked part-time with Blend, a Saudi startup, helping
          launch a restaurant technology platform from the ground up, and with
          Redo, where I took ownership of the frontend of an AI-powered
          productivity platform and expanded into backend development with
          PostgreSQL and Prisma. Most recently, at StoreZon in Dubai, I
          architected and built a full-featured freelancer marketplace
          end-to-end, from authentication and real-time messaging to payments
          and deployment.
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
