import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioItem(params) {
	const { portfolioItems } = params;

	return (
		<div className="max-w-4xl">
			{portfolioItems.map((portfolioItem, i) => (
				<Link key={i} href={portfolioItem.link}>
				<div className="grid grid-cols-2 shadow-lg m-5">
					<div className="px-6 py-4">
						<div className="font-bold text-sm md:text-lg">{portfolioItem.name}</div>
						<div className="text-xs md:text-sm">{portfolioItem.desc}</div>
					</div>
					<div className="px-4">
						<Image
							className="object-contain h-96"
							src={portfolioItem.image}
							alt={portfolioItem.name}
						/>
					</div>
				</div>
				</Link>
			))}
		</div>
	);
}
