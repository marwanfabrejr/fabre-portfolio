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
            I&apos;m a frontend-focused engineer with strong full-stack
            capabilities, building sleek and efficient web applications with the
            latest technologies. Here are my main tools of the trade:
          </p>
          <ul className='list-none p-0'>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>React</span> &ndash;
              Building modular, reusable interfaces with a component-driven
              approach
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>Next.js</span>{' '}
              &ndash; Crafting scalable and SEO-friendly web apps
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>TypeScript</span>{' '}
              &ndash; Bringing type safety and cleaner code to the table
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>Tailwind CSS</span>{' '}
              &ndash; Designing responsive and stylish interfaces effortlessly
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>Redux Toolkit</span>{' '}
              &ndash; Effortless state management for complex apps
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                PostgreSQL &amp; Prisma
              </span>{' '}
              &ndash; Modeling data and building full-stack features
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                REST APIs &amp; Route Handlers
              </span>{' '}
              &ndash; Designing robust and secure backend functionality
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Auth &amp; Authorization
              </span>{' '}
              &ndash; Securing multi-role applications with NextAuth
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Real-time &amp; Payments
              </span>{' '}
              &ndash; Pusher, Socket.IO, PayPal, Cloudinary, Postmark
            </li>
            <li className='max-w-fit text-[18px] text-white [animation:pulse_1s] [animation-delay:1.2s]'>
              <span className='font-medium text-goldenrod'>
                Tools &amp; Platforms
              </span>{' '}
              &ndash; Git, GitHub, Vercel, npm, Yarn
            </li>
          </ul>
          <p className='max-w-fit text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.3s]'>
            While I&apos;m not a designer, I have a keen eye for aesthetics and
            excel in creating intuitive, responsive designs. I&apos;m passionate
            about writing optimized code and always strive to deliver the best
            user experience. Committed and reliable, I bring energy and
            dedication to every project I tackle.
          </p>
          <p className='max-w-fit pb-6 text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.4s]'>
            Visit my{' '}
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
      <Cubes />
      <Loader />
    </div>
  );
}
