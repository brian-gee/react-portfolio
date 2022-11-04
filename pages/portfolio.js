import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import portfolioItem from '../components/portfolio-item';
import workday from '../public/workday.png'
import jate from '../public/jate.png'
import noteTaker from '../public/note-taker.png'
import employeeManager from '../public/employee-manager.png'

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      'name': 'Workday',
      'image': 'workday',
      'github': 'github.com'
    },
  ])

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Portfolio */}
      <main className="bg-white px-10 min-h-screen">
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
          <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
            <portfolioItem portfolioItems = {portfolioItems} />
          {/* Work Day Scheduler Card */}
            <Link href="#">
              <div class="p-5 max-w-sm bg-white rounded-lg shadow-lg m-2">
                  <Image src={workday} alt='work day scheduler' className='object-cover'/>
                <div class="pt-5">
                  <h5 class="mb-2 text-xl text-center tracking-tight">Work Day Scheduler</h5>
                </div>
             </div>
            </Link>
          {/* JATE Card*/}
            <Link href="#">
              <div class="p-5 max-w-sm bg-white rounded-lg shadow-lg m-2">
                  <Image src={jate} alt='jate' className='object-cover'/>
                <div class="pt-5">
                  <h5 class="text-xl text-center tracking-tight">JATE</h5>
                </div>
             </div>
            </Link>
          {/* Note Taker Card*/}
            <Link href="#">
              <div class="p-5 max-w-sm bg-white rounded-lg shadow-lg m-2">
                  <Image src={noteTaker} alt='note taker' className='object-cover'/>
                <div class="pt-5">
                  <h5 class="text-xl text-center tracking-tight">Note Taker</h5>
                </div>
             </div>
            </Link>
            {/* Employee Manager */}
            <Link href="#">
              <div class="p-5 max-w-sm bg-white rounded-lg shadow-lg m-2">
                  <Image src={employeeManager} alt='employee manager' className='object-cover'/>
                <div class="pt-5">
                  <h5 class="text-xl text-center tracking-tight">Note Taker</h5>
                </div>
             </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
