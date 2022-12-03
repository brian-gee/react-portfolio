import Head from 'next/head';
import { useState } from 'react';
import PortfolioItem from '../components/portfolio-item';
import skCleaning from '../public/SK-Cleaning.png'
import weatherDashboard from '../public/Weather-Dashboard.png'

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      'name': 'Customer Manager',
      'image': skCleaning,
      'github': 'https://brian-gee.github.io/weather-dashboard/'
    },
    {
      'name': 'Weather Dashboard',
      'image': weatherDashboard,
      'github': ''
    },
  ])

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Portfolio */}
      <main className="px-10">
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
