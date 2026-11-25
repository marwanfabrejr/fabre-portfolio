'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faBolt,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const navItems = [
  { href: '/', icon: faHome, label: 'HOME' },
  { href: '/about', icon: faUser, label: 'ABOUT' },
  { href: '/skills', icon: faBolt, label: 'SKILLS' },
  { href: '/experience', icon: faAddressBook, label: 'EXPERIENCE' },
  { href: '/portfolio', icon: faSuitcase, label: 'PORTFOLIO' },
  { href: '/contact', icon: faEnvelope, label: 'CONTACT' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='relative z-30 flex h-screen w-[15vw] min-w-[48px] shrink-0 flex-col bg-sidebar md:w-[11vw] lg:w-[8vw] xl:w-[90px]'>
      <Link href='/' className='block px-2 pb-0 pt-3 text-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/logo-m.png'
          alt='Logo'
          className='mx-auto block h-auto w-[42px]'
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='sub-logo mx-auto block w-[50px]'
          src='/images/logo-sub1.png'
          alt='Marwan'
        />
      </Link>

      <nav className='flex flex-1 flex-col items-center justify-center'>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className='group relative block h-[51px] w-full text-center leading-[51px]'
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={
                  active
                    ? 'text-[20px] text-goldenrod'
                    : 'text-[20px] text-nav group-hover:opacity-0'
                }
              />
              <span className='pointer-events-none absolute inset-x-0 bottom-0 flex justify-center text-[9px] font-medium tracking-[2px] text-goldenrod opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <ul className='mb-5 flex list-none flex-col items-center p-0'>
        <li>
          <a
            href='https://www.linkedin.com/in/marwan-ahmed-mohamed-hussien-4b155421'
            target='_blank'
            rel='noreferrer'
            className='block p-[7px] text-[18px] leading-4'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className='text-nav hover:text-goldenrod'
            />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/marwanfabrejr'
            target='_blank'
            rel='noreferrer'
            className='block p-[7px] text-[18px] leading-4'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='text-nav hover:text-goldenrod'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/fabrejrx'
            target='_blank'
            rel='noreferrer'
            className='block p-[7px] text-[18px] leading-4'
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className='text-nav hover:text-goldenrod'
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
