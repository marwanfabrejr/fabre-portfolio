'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedLetters from '@/components/AnimatedLetters';
import Cubes from '@/components/Cubes';
import Loader from '@/components/Loader';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Marwan Zayed'];
  const jobArray = [...'Frontend Developer.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='home-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='flex min-h-full w-full items-center'>
        <div className='relative z-10 ml-[10%] w-[80%] max-w-[700px] md:w-[50%] lg:w-[45%]'>
          <h1 className="relative m-0 font-display text-white text-[27px] font-normal leading-[33px] tracking-[4px]  before:absolute before:-left-[15px] before:-top-[40px] before:font-script before:text-[18px] before:text-goldenrod before:leading-none before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:ml-[20px] after:mt-[18px] after:font-script after:text-[18px] after:leading-none after:opacity-60 after:content-['<h1\/>'] after:text-goldenrod after:[animation:fadeIn_1s_1.7s_backwards] sm:text-[40px] sm:leading-[43px] md:text-[56px] md:leading-[53px]">
            {/* <span className={letterClass}>Y</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>,</span>
            <br /> */}
            <span className={`${letterClass} _1`}>I</span>
            <span className={`${letterClass} _2`}>&apos;</span>
            <span className={`${letterClass} _3`}>m</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={4}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2 className='mt-2 font-sans text-white text-[9px] font-normal tracking-[3px] text-goldenrod [animation:fadeIn_1s_1.8s_backwards] sm:mt-5 sm:text-[11px]'>
            4+ years of experience with React &amp; Next.js, plus full-stack
            capabilities.
          </h2>
          <Link href='/contact' className='pointer-events-none block'>
            <ul className='m-0 list-none p-0'>
              <li className='home-cta pointer-events-auto'>
                Contact Me
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </Link>
        </div>
      </div>
      <Cubes />
      <Loader />
    </div>
  );
}
