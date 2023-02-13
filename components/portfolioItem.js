import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioItem(params) {
  const { portfolioItems } = params;

  return (
    <div className="max-w-4xl md:grid md:grid-cols-2">
      {portfolioItems.map((portfolioItem, i) => (
        <div key={i} className="shadow-lg m-5">
          <div className="px-6 py-4 text-center">
            <div className="text-2xl md:text-3xl">{portfolioItem.name}</div>
            <div className="md:text-lg p-2">{portfolioItem.desc}</div>
            <div>
              <Image
                className="object-contain m-3 max-h-96"
                src={portfolioItem.image}
                alt={portfolioItem.name}
              />
            </div>
            <div className="p-2 mt-2 flex justify-center space-x-2">
              <Link href={portfolioItem.link}>
                <button className="btn btn-sm rounded-3xl">Live Demo</button>
              </Link>
              <Link href={portfolioItem.github}>
                <button className="btn btn-sm rounded-3xl">Github</button>
              </Link>
            </div>
          </div>
          <div className="px-4"></div>
        </div>
      ))}
    </div>
  );
}
