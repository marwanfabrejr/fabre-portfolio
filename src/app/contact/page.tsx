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
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            strArray={[...'Contact me']}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <p>
          I am a frontend-focused engineer interested in roles with the
          opportunity to work with the latest technologies on challenging and
          diverse projects, and I am open to full-stack opportunities and
          collaborations. However, if you have any other request or question,
          don&apos;t hesitate to contact me using the form below either.
        </p>
        <div className='contact-form'>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input
                  placeholder='Name'
                  type='text'
                  name='from_name'
                  required
                />
              </li>
              <li className='half'>
                <input placeholder='Email' type='email' name='email' required />
              </li>
              <li>
                <input
                  placeholder='Subject'
                  type='text'
                  name='subject'
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder='Message'
                  name='message'
                  required
                ></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='SEND' />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='info-map'>
        Marwan Zayed,
        <br />
        Egypt,
        <br />
        Alexandria.
        <br />
        <br />
        <span>marwanzayed4444@gmail.com</span>
        <br />
        <span>+20 121 284 3340 / +971 56 564 1560</span>
      </div>
      <div className='map-wrap'>
        31.215077&deg;N 29.92743&deg;E
        <MapComponent />
      </div>
      <Loader />
    </div>
  );
}
