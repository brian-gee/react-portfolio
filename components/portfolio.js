import { useState } from 'react';
import PortfolioItem from './portfolioItem';
import bwp from '../public/bwp.png';
import wd from '../public/wd.png';

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      name: 'Blue Water Pools',
      desc: 'Customer management page developed using React, TypeScript, and Firebase.',
      image: bwp,
      github: 'https://github.com/brian-gee/blue-water-pools',
      link: 'https://bluewaterpools.xyz',
    },
    {
      name: 'Weather Dashboard',
      desc: 'Get realtime weather data using OpenWeatherAPI',
      image: wd,
      github: 'https://github.com/brian-gee/weather-dashboard',
      link: 'https://brian-gee.github.io/weather-dashboard/',
    },
  ]);

  return (
    <div>
      <main className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <section>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight py-2">
              Portfolio
            </h3>
          </div>
          <div className="flex justify-center">
            <PortfolioItem portfolioItems={portfolioItems} />
          </div>
        </section>
      </main>
    </div>
  );
}
