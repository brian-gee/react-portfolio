import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioItem(params) {
	const { portfolioItems } = params;

	return (
		<div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
			{portfolioItems.map((portfolioItem, i) => (
				<Link key={i} href={portfolioItem.link}>
				<div className="m-3 rounded border-solid border-2 border-gray-100">
					<div className="px-6 py-4 flex justify-center">
						<div className="font-bold text-xl">{portfolioItem.name}</div>
					</div>
					<div className="max-w-sm h-72 rounded overflow-hidden shadow-lg p-5">
						<Image
							className="object-cover h-96 rounded"
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
