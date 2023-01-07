import Image from 'next/image';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function PortfolioItem(params) {
	const { portfolioItems } = params;

	return (
		<div className="max-w-4xl">
			{portfolioItems.map((portfolioItem, i) => (
				<div key={i} className="grid grid-cols-2 shadow-lg m-5">
					<div className="px-6 py-4">
						<div className="font-bold text-sm md:text-lg">
							{portfolioItem.name}
						</div>
						<div className="text-xs md:text-sm text-gray-600">{portfolioItem.desc}</div>
						<div className="p-2">
							<Stack direction="row" spacing={2}>
								<Button variant="contained" endIcon={<SendIcon />}>
									Live Demo
								</Button>
								<Button variant="outlined" startIcon={<DeleteIcon />}>
									Source Code
								</Button>
							</Stack>
						</div>
					</div>
					<div className="px-4">
						<Image
							className="object-contain h-60 m-3"
							src={portfolioItem.image}
							alt={portfolioItem.name}
						/>
					</div>
				</div>
			))}
		</div>
	);
}