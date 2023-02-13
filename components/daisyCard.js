import Image from 'next/image';
import Link from 'next/link';

export default function DaisyCard(params) {
  const { portfolioItems } = params;

  return (
    <div className="max-w-4xl md:grid md:grid-cols-1">
      {portfolioItems.map((portfolioItem, i) => (
        <div key={i} className="shadow-lg m-5">
          <Link href={portfolioItem.link}>
            <div className="card h-96 w-96 bg-base-100 shadow-xl image-full p-5">
              <figure>
                <Image
                  className="object-contain "
                  src={portfolioItem.image}
                  alt={portfolioItem.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center text-3xl pt-20">
                  {portfolioItem.name}
                </h2>
                <div className="flex justify-center pt-2">
                  <button className="btn btn-primary">Live Demo</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
