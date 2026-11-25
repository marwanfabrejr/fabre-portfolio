'use client';

import { useEffect, useState } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Loader from '@/components/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Experience() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slide1 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Full Stack Developer</li>
      </h2>
      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        StoreZon L.L.C
        <span className='text-white'> ( 11/2025 - 07/2026 ) </span>- Dubai, UAE
        | Full Time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Architected and built a full-featured freelancer marketplace from
          scratch using Next.js, React, TypeScript, Tailwind CSS, Prisma ORM,
          and PostgreSQL (Supabase), covering the complete hiring lifecycle from
          project posting through payment and completion.
        </li>
        <li className='my-3.5'>
          Led end-to-end technical development, translating business
          requirements into features, defining MVP priorities, and making
          architecture and technology decisions.
        </li>
        <li className='my-3.5'>
          Implemented multi-role authentication and authorization for Clients,
          Freelancers, and Admins using NextAuth, with an admin dashboard for
          analytics, user management, and content moderation.
        </li>
        <li className='my-3.5'>
          Built real-time messaging with Pusher and payment/escrow logic with
          PayPal, integrating Cloudinary for media and Postmark for
          transactional emails.
        </li>
      </ul>
    </>
  );

  const slide2 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>
      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Blue Holding
        <span className='text-white'> ( 11/2023 - 08/2025 ) </span>- Alexandria,
        Egypt | Full Time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Collaborated with frontend, backend, UI/UX, DevOps, and product teams
          to build web applications and interactive digital experiences for
          pharmaceutical and cosmetics companies across the UAE, Saudi Arabia,
          and other markets.
        </li>
        <li className='my-3.5'>
          Developed complete frontend features from requirements through
          implementation and delivery across a diverse range of client projects.
        </li>
        <li className='my-3.5'>
          Contributed to a reusable LMS platform for corporate training, owning
          approximately 80% of the frontend implementation and helping evolve it
          into a customizable commercial solution.
        </li>
        <li className='my-3.5'>
          Developed interactive event experiences, including a card-matching
          game that became one of the event&apos;s most engaging activities.
        </li>
        <li className='my-3.5'>
          Took on senior-level frontend responsibilities, supporting teammates
          and stepping into additional coordination duties when the team leader
          was unavailable.
        </li>
      </ul>
    </>
  );

  const slide3 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>
      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Blend
        <span className='text-white'> ( 01/2024 - 09/2024 ) </span>- Riyadh,
        Saudi Arabia | Part Time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Helped build and launch a restaurant technology platform from the
          ground up over a nine-month development cycle as one of two frontend
          developers in a cross-functional engineering team.
        </li>
        <li className='my-3.5'>
          Built three connected applications covering menu management, order
          management, and the Blender dashboard.
        </li>
        <li className='my-3.5'>
          Contributed approximately 35&ndash;50% of the frontend workload across
          development phases, supporting real-time functionality, notifications,
          and external integrations.
        </li>
      </ul>
    </>
  );

  const slide4 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>
      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Redo
        <span className='text-white'> ( 01/2025 - 04/2025 ) </span>- Gouna,
        Egypt / Dublin, Ireland | Part Time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Joined an early-stage startup developing an AI-powered productivity
          platform that turned work emails into actionable tasks and activities.
        </li>
        <li className='my-3.5'>
          Took ownership of frontend development after the previous frontend
          developer left, collaborating with the backend and product teams to
          implement and refine features.
        </li>
        <li className='my-3.5'>
          Refactored and reorganized significant parts of the existing frontend
          codebase, improving its structure and maintainability.
        </li>
        <li className='my-3.5'>
          Expanded into backend and database development by learning and
          applying PostgreSQL and Prisma ORM, gaining practical full-stack
          experience.
        </li>
      </ul>
    </>
  );

  const slide5 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>
      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Sphinx Publishing
        <span className='text-white'> ( 02/2022 - 11/2023 ) </span>- Alexandria,
        Egypt | Full Time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Built educational websites, applications, exercises, and interactive
          learning experiences for digital textbooks and curricula.
        </li>
        <li className='my-3.5'>
          Started with HTML, CSS, and JavaScript and progressively adopted React
          and Next.js, applying them to production projects and delivering
          complete features end-to-end.
        </li>
        <li className='my-3.5'>
          Progressed into a senior contributor role, supporting teammates and
          taking on team-lead responsibilities when the team leader was
          unavailable.
        </li>
      </ul>
    </>
  );

  return (
    <div className='experience-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='flex min-h-full w-full items-center py-20'>
        <div className='ml-[10%] w-[80%] md:ml-[8%] md:w-[84%]'>
          <h1 className="relative -left-[10px] mb-10 font-display text-[39px] font-normal leading-none text-goldenrod before:absolute before:-left-[10px] before:-top-[10px] before:font-script before:text-[18px] before:leading-[18px] before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:absolute after:-bottom-[20px] after:-left-[30px] after:ml-[20px] after:font-script after:text-[18px] after:leading-[18px] after:text-goldenrod after:opacity-60 after:content-['<h1\/>'] sm:text-[53px]">
            <AnimatedLetters
              strArray={[...'Experience']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <Slider {...sliderSettings}>
            <div>{slide1}</div>
            <div>{slide2}</div>
            <div>{slide3}</div>
            <div>{slide4}</div>
            <div>{slide5}</div>
          </Slider>
          <p className='mt-6 max-w-fit text-[18px] font-light text-white'>
            Visit my
            <a
              target='_blank'
              href='https://www.linkedin.com/in/marwan-ahmed-mohamed-hussien-4b155421'
              className='pl-1 text-goldenrod no-underline'
            >
              LinkedIn{' '}
            </a>
            profile for more details. Also you can checkout my CV on this
            <a
              target='_blank'
              download=''
              href='https://coral-shaun-69.tiiny.site'
              className='pl-1 text-goldenrod no-underline'
            >
              link
            </a>
            .
          </p>
        </div>
      </div>
      <Loader />
    </div>
  );
}
