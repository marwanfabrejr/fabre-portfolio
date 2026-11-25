'use client';

import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '@/components/AnimatedLetters';
import Loader from '@/components/Loader';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
});

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_0hi6ahe',
        'template_pafpjli',
        form.current,
        'nY22MSLJU3SP-yIrs',
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert('Failed to send the message, please try again');
        },
      );
  };

  return (
    <div className='contact-page relative h-full w-full overflow-y-auto overflow-x-hidden opacity-0 [animation:fadeIn_1s_ease_forwards] [animation-delay:1s]'>
      <div className='mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 py-20 lg:grid-cols-2 lg:gap-12'>
        <div className='flex items-center'>
          <div className='w-full px-[10%] md:px-[8%] lg:pl-[6%] lg:pr-0'>
            <h1 className="relative -left-[10px] mb-8 font-display text-[39px] font-normal leading-none text-goldenrod before:absolute before:-left-[10px] before:-top-[10px] before:font-script before:text-[18px] before:leading-[18px] before:text-goldenrod before:opacity-60 before:content-['<h1>'] after:absolute after:-bottom-[20px] after:-left-[30px] after:ml-[20px] after:font-script after:text-[18px] after:leading-[18px] after:text-goldenrod after:opacity-60 after:content-['<h1\/>'] sm:text-[53px]">
              <AnimatedLetters
                strArray={[...'Contact me']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p className='max-w-fit text-[18px] font-light text-white [animation:pulse_1s] [animation-delay:1.1s]'>
              I am a frontend-focused engineer interested in roles with the
              opportunity to work with the latest technologies on challenging
              and diverse projects, and I am open to full-stack opportunities
              and collaborations. However, if you have any other request or
              question, don&apos;t hesitate to contact me using the form below
              either.
            </p>
            <div className='contact-form mt-5 w-full'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid grid-cols-1 gap-x-3 gap-y-2.5 md:grid-cols-2'>
                  <div className='w-full overflow-hidden [animation:fadeInUp_2s_2s_forwards]'>
                    <input
                      placeholder='Name'
                      type='text'
                      name='from_name'
                      required
                      className='h-[50px] w-full border-0 bg-inputbg px-5 text-[16px] text-white placeholder:text-white/50 focus:placeholder:opacity-0 focus:outline-none'
                    />
                  </div>
                  <div className='w-full overflow-hidden [animation:fadeInUp_2s_2s_forwards]'>
                    <input
                      placeholder='Email'
                      type='email'
                      name='email'
                      required
                      className='h-[50px] w-full border-0 bg-inputbg px-5 text-[16px] text-white placeholder:text-white/50 focus:placeholder:opacity-0 focus:outline-none'
                    />
                  </div>
                  <div className='w-full overflow-hidden md:col-span-2 [animation:fadeInUp_2s_2s_forwards]'>
                    <input
                      placeholder='Subject'
                      type='text'
                      name='subject'
                      required
                      className='h-[50px] w-full border-0 bg-inputbg px-5 text-[16px] text-white placeholder:text-white/50 focus:placeholder:opacity-0 focus:outline-none'
                    />
                  </div>
                  <div className='w-full overflow-hidden md:col-span-2 [animation:fadeInUp_2s_2s_forwards]'>
                    <textarea
                      placeholder='Message'
                      name='message'
                      required
                      className='min-h-[150px] w-full resize-none border-0 bg-inputbg p-5 text-[16px] text-white placeholder:text-white/50 focus:placeholder:opacity-0 focus:outline-none'
                    ></textarea>
                  </div>
                  <div className='md:col-span-2'>
                    <input
                      type='submit'
                      className='float-right mr-2.5 cursor-pointer rounded border border-goldenrod bg-transparent px-2.5 py-[13px] text-[11px] uppercase tracking-[3px] text-goldenrod transition-colors duration-300 hover:bg-goldenrod hover:text-[#333]'
                      value='SEND'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='relative h-[360px] w-full lg:h-auto'>
          <div className='info-map absolute right-4 top-8 z-[999999] max-w-[315px] bg-black p-5 font-sans text-[17px] font-light text-white opacity-0 [animation:fadeIn_1s_1.5s_forwards] lg:right-[30%] lg:top-[30px]'>
            Marwan Zayed,
            <br />
            Egypt,
            <br />
            Alexandria.
            <br />
            <br />
            <span className='text-[16px]'>marwanzayed4444@gmail.com</span>
            <br />
            <span className='text-[16px]'>
              +20 121 283 4430 / +971 56 564 1560
            </span>
          </div>
          <div className='map-wrap h-full w-full bg-[rgba(8,253,216,0.1)] text-[12px] text-white'>
            <MapComponent />
          </div>
        </div>
      </div>
      <Loader />
    </div>
  );
}
