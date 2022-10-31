import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import workday from '../public/workday.png'
import jate from '../public/jate.png'
import { useState } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-black min-h-screen">
        {/* Portfolio */}
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
          <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className='basis-1/3 flex-1'>
                <h1 className='text-xl'>Work Day Scheduler</h1>
                <Link href='https://github.com/brian-gee/work-day-scheduler'>
                  <Image src={workday} className='rounded-lg object- cover' width={200} height={2} />
                </Link>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className='basis-1/3 flex-1'>
                <h1 className='text-xl'>JATE</h1>
                <Link href='https://github.com/brian-gee/pwa-text-editor'>
                  <Image src={jate} className='rounded-lg object- cover' width={200} height={200} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
