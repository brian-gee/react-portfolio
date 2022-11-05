import Head from 'next/head';
import { useState } from 'react';
import PortfolioItem from '../components/portfolio-item';
import workday from '../public/workday.png'
import jate from '../public/jate.png'
import noteTaker from '../public/note-taker.png'
import employeeManager from '../public/employee-manager.png'

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      'name': 'Work Day Scheduler',
      'image': workday,
      'github': 'https://github.com/brian-gee/work-day-scheduler'
    },
    {
      'name': 'JATE',
      'image': jate,
      'github': ''
    },
    {
      'name': 'Note Taker',
      'image': noteTaker,
      'github': ''
    },
    {
      'name': 'Employee Manager',
      'image': employeeManager,
      'github': ''
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
          <div className="flex justify-center">
            <PortfolioItem portfolioItems = {portfolioItems} />
          </div>
        </section>
      </main>
    </div>
  );
}
