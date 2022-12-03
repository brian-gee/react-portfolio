import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioItem(params) {
	const { portfolioItems } = params;

	return (
		<div className="flex flex-col justify-center lg:flex-row lg:flex-wrap">
			{portfolioItems.map((portfolioItem, i) => (
				<div key={i} className="m-3 rounded border-solid border-2 border-gray-100">
					<div class="px-6 py-4 flex justify-center">
						<div class="font-bold text-xl">{portfolioItem.name}</div>
					</div>
					<div class="max-w-sm h-72 rounded overflow-hidden shadow-lg p-5">
						<Image
							class="object-cover h-96 rounded"
							src={portfolioItem.image}
							alt={portfolioItem.name}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
