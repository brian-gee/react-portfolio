import { useState } from "react";
import PortfolioItem from "./portfolioItem";
import bwp from "../public/bwp.png";
import wd from "../public/wd.png";

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      name: "Customer Manager",
      desc: "The customer manager web app is a powerful tool for businesses to manage their customer information. It is built with React, TypeScript, and Tailwind CSS, and uses Firebase for its backend.",
      image: bwp,
      link: "https://bluewaterpools.xyz",
    },
    {
      name: "Weather Dashboard",
      desc: "Our weather dashboard is a dynamic and intuitive tool for checking the current and forecasted weather conditions. It is built using JavaScript, HTML, and CSS on the frontend, and utilizes Node.js on the backend. The app also integrates with the OpenWeather API to retrieve live weather data for locations around the world.",
      image: wd,
      github: "https://github.com/brian-gee/weather-dashboard",
      link: "https://brian-gee.github.io/weather-dashboard/",
    },
  ]);

  return (
    <div>
      <main className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <section>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight py-2">Portfolio</h3>
          </div>
          <div className="flex justify-center">
            <PortfolioItem portfolioItems={portfolioItems} />
          </div>
        </section>
      </main>
    </div>
  );
}
