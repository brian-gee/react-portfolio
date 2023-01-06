import { useState } from "react";
import PortfolioItem from "../components/portfolio-item";
import bwp from "../public/bwp.png";
import wd from "../public/wd.png";

export default function Portfolio() {
  const [portfolioItems] = useState([
    {
      name: "Customer Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores dolorem! Soluta, nemo. Velit sapiente itaque, sit tempora fuga hic ipsum laboriosam. Eos, tempora fugiat doloremque ea sunt magni necessitatibus?",
      image: bwp,
      link: "https://bluewaterpools.xyz",
    },
    {
      name: "Weather Dashboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores dolorem! Soluta, nemo. Velit sapiente itaque, sit tempora fuga hic ipsum laboriosam. Eos, tempora fugiat doloremque ea sunt magni necessitatibus?",
      image: wd,
      github: "https://github.com/brian-gee/weather-dashboard",
      link: "https://brian-gee.github.io/weather-dashboard/",
    },
  ]);

  return (
    <div>
      {/* Portfolio */}
      <main className="px-10">
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
          <div className="flex justify-center">
            <PortfolioItem portfolioItems={portfolioItems} />
          </div>
        </section>
      </main>
    </div>
  );
}
