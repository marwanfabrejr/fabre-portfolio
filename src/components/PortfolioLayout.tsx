'use client';

import Sidebar from '@/components/Sidebar';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

fontAwesomeConfig.autoAddCss = false;

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen w-full overflow-hidden bg-ink'>
      <Sidebar />
      <main className='relative flex-1 overflow-hidden'>
        <span className='pointer-events-none absolute left-[3%] top-[6%] font-script text-[18px] text-goldenrod opacity-60'>
          &lt;body&gt;
        </span>
        {children}
        <span className='pointer-events-none absolute bottom-0 left-[3%] font-script text-[18px] leading-none text-goldenrod opacity-60'>
          &lt;/body&gt;
          <br />
          <span className='-ml-5 whitespace-nowrap'>&lt;/html&gt;</span>
        </span>
      </main>
    </div>
  );
}
