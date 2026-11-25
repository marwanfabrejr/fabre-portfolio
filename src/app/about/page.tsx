'use client';

import { useEffect, useState } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Loader from '@/components/Loader';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='about-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='flex min-h-full w-full items-center py-20'>
        <div className='ml-[10%] w-[80%] md:ml-[8%] md:w-[84%]'>
          <h1 className="relative -left-[10px] mb-10 font-display text-[39px] font-normal leading-none text-goldenrod before:absolute before:-left-[10px] before:-top-[10px] before:font-script before:text-[18px] before:leading-[18px] before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:absolute after:-bottom-[20px] after:-left-[30px] after:ml-[20px] after:font-script after:text-[18px] after:leading-[18px] after:text-goldenrod after:opacity-60 after:content-['<h1\/>'] sm:text-[53px]">
            <AnimatedLetters
              strArray={[...'About me']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p className='text-[18px] text-white [animation:pulse_1s] [animation-delay:1.1s]'>
            I&apos;m Marwan Zayed, a Frontend-focused Software Engineer with 4+
            years of experience building production web applications using
            React, Next.js, TypeScript, and Tailwind CSS. I hold a Bachelor of
            Computer Science and Information Systems from October 6 University.
          </p>
          <p className='text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
            I started my career at Sphinx Publishing, building educational
            websites, applications, exercises, and interactive learning
            experiences for digital curricula and textbooks. Beginning with
            HTML, CSS, and JavaScript, I progressively adopted React and Next.js
            and applied them to production projects, growing into a senior
            contributor role within the team.
          </p>
          <p className='text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.3s]'>
            I then joined Blue Holding as a Frontend Developer, where I built
            web applications and interactive digital experiences for
            pharmaceutical and cosmetics companies across the UAE, Saudi Arabia,
            and other markets. I developed complete features from requirements
            through delivery and contributed to a reusable, customizable LMS
            platform for corporate training.
          </p>
          <p className='text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.4s]'>
            Along the way, I worked part-time with Blend, a Saudi startup,
            helping launch a restaurant technology platform from the ground up,
            and with Redo, where I took ownership of the frontend of an
            AI-powered productivity platform and expanded into backend
            development with PostgreSQL and Prisma. Most recently, at StoreZon
            in Dubai, I architected and built a full-featured freelancer
            marketplace end-to-end, from authentication and real-time messaging
            to payments and deployment.
          </p>
          <p className='pb-6 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.5s]'>
            I&apos;m always excited to embrace new challenges and grow in the
            ever-evolving world of web development. Let&apos;s create something
            amazing together!
          </p>
        </div>
      </div>
      <Loader />
    </div>
  );
}
