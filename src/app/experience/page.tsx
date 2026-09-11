'use client';

import { useEffect, useState } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Cubes from '@/components/Cubes';
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
      <h2>
        <li>Full Stack Developer</li>
      </h2>
      <h3>
        StoreZon L.L.C<span> ( 11/2025 - 07/2026 ) </span> - Dubai, UAE | Full
        Time.
      </h3>
      <ul>
        <li>
          Architected and built a full-featured freelancer marketplace from
          scratch using Next.js, React, TypeScript, Tailwind CSS, Prisma ORM,
          and PostgreSQL (Supabase), covering the complete hiring lifecycle from
          project posting through payment and completion.
        </li>
        <li>
          Led end-to-end technical development, translating business
          requirements into features, defining MVP priorities, and making
          architecture and technology decisions.
        </li>
        <li>
          Implemented multi-role authentication and authorization for Clients,
          Freelancers, and Admins using NextAuth, with an admin dashboard for
          analytics, user management, and content moderation.
        </li>
        <li>
          Built real-time messaging with Pusher and payment/escrow logic with
          PayPal, integrating Cloudinary for media and Postmark for
          transactional emails.
        </li>
      </ul>
    </>
  );

  const slide2 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Blue Holding<span> ( 11/2023 - 08/2025 ) </span> - Alexandria, Egypt |
        Full Time.
      </h3>
      <ul>
        <li>
          Collaborated with frontend, backend, UI/UX, DevOps, and product teams
          to build web applications and interactive digital experiences for
          pharmaceutical and cosmetics companies across the UAE, Saudi Arabia,
          and other markets.
        </li>
        <li>
          Developed complete frontend features from requirements through
          implementation and delivery across a diverse range of client projects.
        </li>
        <li>
          Contributed to a reusable LMS platform for corporate training, owning
          approximately 80% of the frontend implementation and helping evolve it
          into a customizable commercial solution.
        </li>
        <li>
          Developed interactive event experiences, including a card-matching
          game that became one of the event&apos;s most engaging activities.
        </li>
        <li>
          Took on senior-level frontend responsibilities, supporting teammates
          and stepping into additional coordination duties when the team leader
          was unavailable.
        </li>
      </ul>
    </>
  );

  const slide3 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Blend<span> ( 01/2024 - 09/2024 ) </span> - Riyadh, Saudi Arabia | Part
        Time.
      </h3>
      <ul>
        <li>
          Helped build and launch a restaurant technology platform from the
          ground up over a nine-month development cycle as one of two frontend
          developers in a cross-functional engineering team.
        </li>
        <li>
          Built three connected applications covering menu management, order
          management, and the Blender dashboard.
        </li>
        <li>
          Contributed approximately 35&ndash;50% of the frontend workload across
          development phases, supporting real-time functionality, notifications,
          and external integrations.
        </li>
      </ul>
    </>
  );

  const slide4 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Redo<span> ( 01/2025 - 04/2025 ) </span> - Gouna, Egypt / Dublin,
        Ireland | Part Time.
      </h3>
      <ul>
        <li>
          Joined an early-stage startup developing an AI-powered productivity
          platform that turned work emails into actionable tasks and activities.
        </li>
        <li>
          Took ownership of frontend development after the previous frontend
          developer left, collaborating with the backend and product teams to
          implement and refine features.
        </li>
        <li>
          Refactored and reorganized significant parts of the existing frontend
          codebase, improving its structure and maintainability.
        </li>
        <li>
          Expanded into backend and database development by learning and
          applying PostgreSQL and Prisma ORM, gaining practical full-stack
          experience.
        </li>
      </ul>
    </>
  );

  const slide5 = (
    <>
      <h2>
        <li>Frontend Developer</li>
      </h2>
      <h3>
        Sphinx Publishing<span> ( 02/2022 - 11/2023 ) </span> - Alexandria,
        Egypt | Full Time.
      </h3>
      <ul>
        <li>
          Built educational websites, applications, exercises, and interactive
          learning experiences for digital textbooks and curricula.
        </li>
        <li>
          Started with HTML, CSS, and JavaScript and progressively adopted React
          and Next.js, applying them to production projects and delivering
          complete features end-to-end.
        </li>
        <li>
          Progressed into a senior contributor role, supporting teammates and
          taking on team-lead responsibilities when the team leader was
          unavailable.
        </li>
      </ul>
    </>
  );

  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
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
        <p>
          Visit my
          <a
            target='_blank'
            href='https://www.linkedin.com/in/marwan-zayed-4b1554213/'
          >
            LinkedIn{' '}
          </a>
          profile for more details. Also you can checkout my CV on this
          <a
            target='_blank'
            download=''
            href='https://coral-shaun-69.tiiny.site'
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
