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
        StoreZon L.L.C.
        <span className='text-white'> ( Nov 2025 – Jul 2026 ) </span>- Dubai,
        UAE | Full-time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Built Opanex Marketplace, a freelancer marketplace, from scratch using
          Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL
          (Supabase), covering the workflow from project posting through order
          completion and payment.
        </li>
        <li className='my-3.5'>
          Designed the PostgreSQL schema and Prisma models, including
          relationships and queries, to support the platform&apos;s core
          business workflows.
        </li>
        <li className='my-3.5'>
          Developed server-side functionality and REST endpoints with Next.js
          Route Handlers, connecting Prisma queries with application logic and
          frontend features.
        </li>
        <li className='my-3.5'>
          Implemented multi-role authentication and authorization for Clients,
          Freelancers, and Admins using NextAuth, including email verification,
          identity verification, and role-based access control.
        </li>
        <li className='my-3.5'>
          Integrated PayPal payments and escrow workflows, including a platform
          fee, automated payouts, and dispute handling. Built real-time
          messaging with Pusher, including typing indicators, reactions, file
          attachments, and read receipts, and integrated Cloudinary for media
          management and Postmark for transactional email.
        </li>
        <li className='my-3.5'>
          Built responsive interfaces, reusable components, and dashboards,
          working directly with the business owner to translate requirements
          into features, prioritize the MVP, estimate tasks, and contribute to
          architecture, delivery, and deployment decisions.
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
        <span className='text-white'> ( Nov 2023 – Aug 2025 ) </span>-
        Alexandria, Egypt | Full-time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Collaborated with frontend, backend, UI/UX, DevOps, and product teams
          to build web applications and interactive digital experiences for
          pharmaceutical and cosmetics clients across the UAE and Saudi Arabia.
        </li>
        <li className='my-3.5'>
          Developed complete frontend features from requirements through
          delivery, translating UI/UX designs into responsive, user-friendly
          interfaces.
        </li>
        <li className='my-3.5'>
          Owned approximately 80% of the frontend implementation of a reusable
          Learning Management System (LMS), collaborating closely with backend
          developers and designers to deliver and maintain the platform.
        </li>
        <li className='my-3.5'>
          Contributed to evolving the LMS into a customizable commercial solution
          used by multiple customers.
        </li>
        <li className='my-3.5'>
          Built interactive event experiences, including a card-matching game
          that became one of the event&apos;s most engaging activities and
          received positive stakeholder feedback.
        </li>
        <li className='my-3.5'>
          Supported frontend task distribution and teammates, taking on
          additional coordination responsibilities when the team lead was
          unavailable.
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
        <span className='text-white'> ( Jan 2024 – Sep 2024 ) </span>- Riyadh,
        Saudi Arabia | Part-time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Contributed to building a restaurant technology platform from the
          ground up over a nine-month development cycle as part of a
          cross-functional engineering team.
        </li>
        <li className='my-3.5'>
          Developed frontend features across three connected applications: Menu
          Management, Order Management, and the Blender Dashboard.
        </li>
        <li className='my-3.5'>
          Integrated REST APIs to support menu operations, order workflows,
          notifications, and real-time functionality.
        </li>
        <li className='my-3.5'>
          Collaborated closely with a senior frontend developer and backend
          engineers, following shared frontend architecture and implementation
          practices.
        </li>
        <li className='my-3.5'>
          Contributed to production features used in real restaurant operations
          during the platform&apos;s initial market launch.
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
        <span className='text-white'> ( Jan 2025 – Apr 2025 ) </span>- Gouna,
        Egypt / Dublin, Ireland | Part-time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Took over frontend ownership for an early-stage productivity platform
          that organizes work emails into actionable tasks and activities.
        </li>
        <li className='my-3.5'>
          Refactored and reorganized significant parts of the existing frontend
          codebase, improving its structure and maintainability.
        </li>
        <li className='my-3.5'>
          Developed and refined user-facing features in collaboration with the
          backend and product teams.
        </li>
        <li className='my-3.5'>
          Worked with communication integrations connecting user channels such
          as Gmail and WhatsApp to the platform.
        </li>
        <li className='my-3.5'>
          Gained practical backend and database experience using PostgreSQL and
          Prisma ORM.
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
        <span className='text-white'> ( Feb 2022 – Nov 2023 ) </span>-
        Alexandria, Egypt | Full-time.
      </h3>
      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Developed frontend features for educational websites and applications,
          including interactive exercises, digital textbook activities, and
          learning experiences for school curricula.
        </li>
        <li className='my-3.5'>
          Started with HTML, CSS, and JavaScript, progressively adopting React
          and Next.js to build and deliver production frontend features.
        </li>
        <li className='my-3.5'>
          Collaborated with frontend and backend developers, team leads, and
          project managers across educational publishing projects for different
          markets.
        </li>
        <li className='my-3.5'>
          Progressed to more complex frontend work, supported teammates,
          coordinated feature work, and covered team-lead responsibilities when
          needed.
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
              href='https://www.linkedin.com/in/marwan-zayed-4b1554213/'
              className='pl-1 text-goldenrod no-underline'
            >
              LinkedIn{' '}
            </a>
            profile for more details.
          </p>
        </div>
      </div>
      <Loader />
    </div>
  );
}
