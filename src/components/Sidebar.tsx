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
  { href: '/about', icon: faUser, label: 'ABOUT', className: 'about-link' },
  { href: '/skills', icon: faBolt, label: 'SKILLS', className: 'skills-link' },
  {
    href: '/experience',
    icon: faAddressBook,
    label: 'EXPERIENCE',
    className: 'experience-link',
  },
  {
    href: '/portfolio',
    icon: faSuitcase,
    label: 'PORTFOLIO',
    className: 'portfolio-link',
  },
  {
    href: '/contact',
    icon: faEnvelope,
    label: 'CONTACT',
    className: 'contact-link',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='nav-bar'>
      <Link className='logo' href='/'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/images/logo-m.png' alt='Logo' />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='sub-logo' src='/images/logo-sub1.png' alt='Marwan' />
      </Link>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${item.className || ''} ${pathname === item.href ? 'active' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} color='#4d4d4e' />
          </Link>
        ))}
      </nav>
      <ul className='socialMedia'>
        <li>
          <a
            href='https://www.linkedin.com/in/marwan-zayed-4b1554213/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/marwanfabrejr'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/fabrejrx'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
}
