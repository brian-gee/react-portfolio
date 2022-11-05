import Link from "next/link";
import Image from "next/image";

export default function PortfolioItem(params) {
  const { portfolioItems } = params;

  return (
    <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
      {portfolioItems.map((portfolioItem, i) => (
        <div key={i} className="columns">
          <Link href={portfolioItem.github}>
              <div class="p-5 max-w-sm bg-white rounded-lg shadow-lg m-2">
                  <Image src={portfolioItem.image} alt={portfolioItem.name} className='object-cover'/>
                <div class="pt-5">
                  <h5 class="mb-2 text-xl text-center tracking-tight">{portfolioItem.name}</h5>
                </div>
             </div>
            </Link>
        </div>
      ))}
    </div>
  )
}