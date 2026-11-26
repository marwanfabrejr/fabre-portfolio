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

  // StoreZon
  const slide1 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Full Stack Developer</li>
      </h2>

      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        StoreZon L.L.C.
        <span className='text-white'> ( Nov 2025 – Jul 2026 ) </span>- Dubai,
        United Arab Emirates | On-site.
      </h3>

      <p className='my-4 text-[16px] text-white'>
        Developed a full-featured freelance marketplace platform from the ground
        up, contributing to its technical architecture, database design,
        frontend development, and backend functionality.
      </p>

      <h4 className='my-4 text-[16px] text-goldenrod'>
        Key Responsibilities & Contributions:
      </h4>

      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Built scalable frontend applications using Next.js, React, TypeScript,
          and Tailwind CSS, developing responsive interfaces and reusable
          component systems.
        </li>

        <li className='my-3.5'>
          Designed and implemented the PostgreSQL database structure,
          independently defining Prisma models, database schemas, relationships,
          and data queries to support core marketplace workflows.
        </li>

        <li className='my-3.5'>
          Developed server-side functionality and REST API endpoints using
          Next.js Route Handlers, connecting application logic, database
          operations, and frontend features.
        </li>

        <li className='my-3.5'>
          Implemented multi-role authentication and authorization for Clients,
          Freelancers, and Admins, including email verification, identity
          verification restrictions, and role-based access control.
        </li>

        <li className='my-3.5'>
          Integrated PayPal payment functionality and developed marketplace
          money workflows, including platform fees, payout processing, and
          dispute-handling features.
        </li>

        <li className='my-3.5'>
          Implemented real-time messaging features using Pusher, including
          typing indicators, reactions, file attachments, and read receipts.
        </li>

        <li className='my-3.5'>
          Integrated Cloudinary for media management and Postmark for
          transactional email delivery.
        </li>

        <li className='my-3.5'>
          Worked directly with the business owner to translate business
          requirements into technical features, contribute to architecture
          decisions, prioritize MVP requirements, and plan development tasks.
        </li>
      </ul>
    </>
  );

  // Blue Holding
  const slide2 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>

      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Blue Holding
        <span className='text-white'> ( Nov 2023 – Aug 2025 ) </span>-
        Alexandria, Egypt | On-site.
      </h3>

      <p className='my-4 text-[16px] text-white'>
        Worked as a Frontend Developer within a cross-functional engineering
        team, building web applications and interactive digital experiences for
        pharmaceutical and cosmetics clients across the UAE and Saudi Arabia.
      </p>

      <h4 className='my-4 text-[16px] text-goldenrod'>
        Key Responsibilities & Contributions:
      </h4>

      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Developed and maintained responsive web applications using React,
          Next.js, JavaScript, and modern frontend technologies.
        </li>

        <li className='my-3.5'>
          Collaborated closely with frontend and backend developers, UI/UX
          designers, DevOps engineers, and product stakeholders to deliver
          features aligned with business and user requirements.
        </li>

        <li className='my-3.5'>
          Owned approximately 80% of the frontend implementation of a reusable
          Learning Management System (LMS), working alongside backend developers
          and designers to deliver a maintainable solution.
        </li>

        <li className='my-3.5'>
          Contributed to making the LMS into a commercial solution tailored to
          multiple customers, with project contracts reaching AED 400,000+
          depending on scope and customization.
        </li>

        <li className='my-3.5'>
          Built interactive digital experiences for events, including a
          card-matching game that became one of the most engaging activities and
          received positive stakeholder feedback.
        </li>

        <li className='my-3.5'>
          Supported frontend task distribution and coordination, helping
          teammates and taking on additional responsibilities when the team lead
          was unavailable.
        </li>

        <li className='my-3.5'>
          Focused on maintainable code, reusable components, responsive
          interfaces, and delivering reliable frontend solutions.
        </li>
      </ul>
    </>
  );

  // Blend
  const slide3 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>

      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Blend
        <span className='text-white'> ( Jan 2024 – Sep 2024 ) </span>- Riyadh,
        Saudi Arabia | Remote.
      </h3>

      <p className='my-4 text-[16px] text-white'>
        Contributed to building a restaurant technology platform from the ground
        up as part of a cross-functional engineering team during a nine-month
        development cycle.
      </p>

      <h4 className='my-4 text-[16px] text-goldenrod'>
        Key Responsibilities & Contributions:
      </h4>

      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Developed frontend features across three connected applications: Menu
          Management, Order Management, and Blender Dashboard.
        </li>

        <li className='my-3.5'>
          Built user interfaces for restaurant menu operations, including menu
          items, pricing, availability, and promotions.
        </li>

        <li className='my-3.5'>
          Implemented order management features supporting incoming and ongoing
          orders, along with courier tracking and order status updates.
        </li>

        <li className='my-3.5'>
          Developed dashboard interfaces to help restaurant owners monitor
          operations and review business performance.
        </li>

        <li className='my-3.5'>
          Integrated REST APIs to connect frontend applications with backend
          services and support core platform workflows.
        </li>

        <li className='my-3.5'>
          Collaborated closely with senior frontend and backend developers,
          following shared architecture and development practices to deliver
          maintainable and scalable features.
        </li>

        <li className='my-3.5'>
          Contributed to delivering production features for a platform serving
          real restaurants during its initial market launch.
        </li>
      </ul>
    </>
  );

  // Sphinx Publishing
  const slide4 = (
    <>
      <h2 className='text-[18px] text-white sm:text-[22px]'>
        <li>Frontend Developer</li>
      </h2>

      <h3 className='text-[18px] text-goldenrod sm:text-[22px]'>
        Sphinx Publishing Company
        <span className='text-white'> ( Feb 2022 – Nov 2023 ) </span>-
        Alexandria, Egypt | On-site.
      </h3>

      <p className='my-4 text-[16px] text-white'>
        Developed frontend features for educational websites and applications,
        contributing to interactive learning experiences, digital textbook
        activities, and educational content for different school curricula.
      </p>

      <h4 className='my-4 text-[16px] text-goldenrod'>
        Key Responsibilities & Contributions:
      </h4>

      <ul className='px-6 text-[16px] text-white sm:px-[22px]'>
        <li className='my-3.5'>
          Developed and maintained frontend features using HTML, CSS, and
          JavaScript, progressively adopting React.js and Next.js to build more
          advanced web applications.
        </li>

        <li className='my-3.5'>
          Built interactive educational experiences, digital learning
          activities, and user interfaces designed to improve students&apos;
          learning experiences.
        </li>

        <li className='my-3.5'>
          Collaborated with frontend and backend developers, team leads, and
          project managers to implement features and deliver project
          requirements.
        </li>

        <li className='my-3.5'>
          Progressed to handling more complex frontend tasks, contributing to
          code improvements, debugging, and maintaining reusable and
          maintainable code.
        </li>

        <li className='my-3.5'>
          Supported teammates with technical guidance and coordination, taking
          on additional responsibilities and covering team-lead duties when
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
          </Slider>

          <p className='mt-6 max-w-fit text-[18px] font-light text-white'>
            Visit my{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/marwan-zayed-4b1554213/'
              className='pl-1 text-goldenrod no-underline'
            >
              LinkedIn{' '}
            </a>
            profile for more details, or{' '}
            <a
              href='/pdfs/Marwan_Zayed_CV.pdf'
              download='Marwan_Zayed_CV.pdf'
              className='text-goldenrod no-underline'
            >
              download my CV
            </a>
            .
          </p>
        </div>
      </div>

      <Loader />
    </div>
  );
}
