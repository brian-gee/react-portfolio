import Image from 'next/image';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import AirplayIcon from '@mui/icons-material/Airplay';
import Stack from '@mui/material/Stack';

export default function PortfolioItem(params) {
	const { portfolioItems } = params;

	return (
		<div className="max-w-4xl">
			{portfolioItems.map((portfolioItem, i) => (
				<div key={i} className="grid grid-cols-2 shadow-lg m-5">
					<div className="px-6 py-4">
						<div className="text-lg md:text-2xl">
							{portfolioItem.name}
						</div>
						<div className="text-xs md:text-sm text-gray-600">
							{portfolioItem.desc}
						</div>
						<div className="p-2 mt-2">
							<Stack direction="row" spacing={2}>
								<Button
									href={portfolioItem.link}
									variant="contained"
									style={{ backgroundColor: '#3b82f6', color: '#FFFFFF' }}
									endIcon={<AirplayIcon />}
								>
									Live Demo
								</Button>
								<Button
									href={portfolioItem.github}
									variant="outlined"
									size="small"
									style={{ color: '#3b82f6' }}
									startIcon={<GitHubIcon />}
								>
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
