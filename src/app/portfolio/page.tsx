'use client';

import { useEffect, useState } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Loader from '@/components/Loader';
import portfolioData from '@/data/portfolio.json';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPortfolio = (portfolio: typeof portfolioData.portfolio) => {
    return (
      <div className='mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10'>
        {portfolio.map((port, idx) => {
          return (
            <div
              className='image-box group relative aspect-[4/3] w-full overflow-hidden rounded-[10px]'
              key={idx}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={port.cover}
                className='portfolio-image absolute inset-0 z-[2] h-full w-full object-cover'
                alt='portfolio'
              />
              <div className='pointer-events-none absolute inset-0 z-[2] bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100' />
              <div className='content absolute bottom-0 z-[3] w-[92%] p-[10px_20px] transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] sm:-bottom-[70px] sm:group-hover:bottom-0'>
                <p className='title m-0 text-[20px] font-medium leading-6 text-white md:text-2xl'>
                  {port.title}
                </p>
                <h4 className='technologies mb-1 mt-0 text-[12px] font-bold text-white md:text-sm'>
                  {port.technologies}
                </h4>
                <p className='description mb-2 mt-1 line-clamp-2 text-[11px] font-normal leading-4 text-white/80 md:text-xs'>
                  {port.description}
                </p>
                <button
                  className='btn mt-4 mb-[10px] h-10 cursor-pointer rounded border-2 border-goldenrod bg-transparent px-[23px] text-[14px] font-bold uppercase leading-[34px] text-white transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:-translate-y-[3px] hover:bg-goldenrod'
                  onClick={() => window.open(port.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='portfolio-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='mt-[7vh] w-full px-[6vw] pb-24 sm:px-[5vw] lg:px-[6vw]'>
        <h1 className="page-title relative mb-12 -left-[10px] font-display text-[39px] font-normal leading-none text-goldenrod before:absolute before:-left-[10px] before:-top-[10px] before:font-script before:text-[15px] before:leading-[18px] before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:absolute after:-bottom-[20px] after:-left-[30px] after:ml-[20px] after:font-script after:text-[15px] after:leading-[18px] after:text-goldenrod after:opacity-60 after:content-['<h1\/>'] sm:text-[53px]">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Portfolio']}
            idx={15}
          />
        </h1>
        {renderPortfolio(portfolioData.portfolio)}
      </div>
      <Loader />
    </div>
  );
}
