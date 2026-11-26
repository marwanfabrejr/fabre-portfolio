'use client';

import { useEffect, useState } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Cubes from '@/components/Cubes';
import Loader from '@/components/Loader';

export default function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='skills-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='flex min-h-full w-full items-center py-20'>
        <div className='ml-[10%] w-[85%] max-w-[700px] md:ml-[8%] md:w-[60%] lg:w-[50%] xl:w-[42%]'>
          <h1 className="relative -left-[10px] mb-10 font-display text-[39px] font-normal leading-none text-goldenrod before:absolute before:-left-[10px] before:-top-[10px] before:font-script before:text-[18px] before:leading-[18px] before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:absolute after:-bottom-[20px] after:-left-[30px] after:ml-[20px] after:font-script after:text-[18px] after:leading-[18px] after:text-goldenrod after:opacity-60 after:content-['<h1\/>'] sm:text-[53px]">
            <AnimatedLetters
              strArray={[...'Skills']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <p className='max-w-fit text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.1s]'>
            I&apos;m a frontend-focused software engineer with strong full-stack
            capabilities. I build responsive, maintainable web applications with
            React and Next.js, and I&apos;m comfortable working across APIs,
            databases, authentication, and third-party integrations.
          </p>
          <ul className='list-none space-y-2 p-0'>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>Frontend</span>{' '}
              &ndash; React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5,
              CSS3, Tailwind CSS, Responsive Web Design.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>State &amp; UI</span>{' '}
              &ndash; Redux Toolkit, Zustand, component-based architecture,
              Framer Motion.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Performance &amp; SEO
              </span>{' '}
              &ndash; Server-Side Rendering (SSR), code splitting, lazy loading,
              SEO metadata, Open Graph, structured data.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Backend &amp; APIs
              </span>{' '}
              &ndash; Next.js Route Handlers, REST API development, server-side
              logic.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Databases &amp; ORM
              </span>{' '}
              &ndash; PostgreSQL, Prisma ORM, Supabase, database schema design,
              data modeling.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Authentication &amp; Authorization
              </span>{' '}
              &ndash; NextAuth, authentication, authorization, role-based access
              control.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>Integrations</span>{' '}
              &ndash; PayPal, Pusher, Socket.IO, Cloudinary, Postmark, Unibyl.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Forms &amp; Validation
              </span>{' '}
              &ndash; React Hook Form, Zod.
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Tools &amp; Platforms
              </span>{' '}
              &ndash; Git, GitHub, Vercel, npm, Yarn.
            </li>
          </ul>
          <p className='max-w-fit text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.3s]'>
            I care about clean component structure, predictable data flows, and
            interfaces that work well across devices. I enjoy collaborating with
            designers and backend engineers to turn product requirements into
            maintainable features.
          </p>
          <p className='max-w-fit pb-6 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.4s]'>
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
      <Cubes />
      <Loader />
    </div>
  );
}
