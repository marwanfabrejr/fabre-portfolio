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
          <p className='mb-4 text-[18px] text-white [animation:pulse_1s] [animation-delay:1.1s]'>
            I&apos;m Marwan Zayed, a frontend-focused software engineer with 4+
            years of experience building production web applications. My core
            work is with React, Next.js, TypeScript, and Tailwind CSS, and I
            have practical full-stack experience across Next.js Route Handlers,
            REST APIs, PostgreSQL, Prisma ORM, authentication, and third-party
            integrations. I hold a Bachelor of Computer Science and Information
            Systems from October 6 University.
          </p>
          <p className='mb-4 text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
            I started my career at Sphinx Publishing, where I developed frontend
            features for educational websites and applications, including
            interactive exercises, digital textbook activities, and learning
            experiences for school curricula. I began with HTML, CSS, and
            JavaScript, then progressively adopted React and Next.js on
            production projects. As my responsibilities grew, I took on more
            complex frontend work, supported teammates, and coordinated feature
            work when the team needed it.
          </p>
          <p className='mb-4 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.3s]'>
            I then joined Blue Holding as a Frontend Developer, building web
            applications and interactive digital experiences for pharmaceutical
            and cosmetics clients across the UAE and Saudi Arabia. I worked
            closely with designers, backend engineers, DevOps, and product
            stakeholders to take features from requirements through delivery. I
            owned approximately 80% of the frontend implementation of a reusable
            Learning Management System (LMS), collaborating with backend
            developers and designers, and contributed to interactive event
            experiences for client campaigns.
          </p>
          <p className='mb-4 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.4s]'>
            Alongside my full-time role, I worked part-time with Blend, a Saudi
            startup, contributing to a restaurant technology platform from the
            ground up across menu management, order management, and dashboard
            applications. I also joined Redo, an early-stage productivity
            platform, where I took over frontend ownership, refactored
            significant parts of the codebase, and worked on Gmail and WhatsApp
            integrations. That role gave me practical experience with PostgreSQL
            and Prisma and strengthened my ability to work across frontend and
            backend concerns.
          </p>
          <p className='mb-4 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.5s]'>
            Most recently, I worked at StoreZon in Dubai as a Full Stack
            Developer, building Opanex Marketplace, a freelancer platform for
            project posting, ordering, payments, and completion. I designed the
            PostgreSQL schema and Prisma models, built REST endpoints with
            Next.js Route Handlers, implemented multi-role authentication and
            PayPal escrow workflows, and developed responsive interfaces and
            dashboards. I worked directly with the business owner on
            requirements, MVP priorities, estimates, and architecture and
            delivery decisions, and I enjoy the collaboration involved in
            turning a product idea into a working system.
          </p>
          <p className='mb-4 pb-6 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.6s]'>
            I&apos;m currently open to frontend and full-stack opportunities in
            Egypt, the UAE, Saudi Arabia, the wider GCC, and remote teams. I&apos;m
            particularly interested in product workflows, dashboards,
            marketplaces, and systems where frontend and backend meet, and I
            like working with designers, engineers, and business stakeholders to
            solve problems with a clear user impact.
          </p>
        </div>
      </div>
      <Loader />
    </div>
  );
}
