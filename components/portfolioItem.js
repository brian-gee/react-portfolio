import Image from 'next/image';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import AirplayIcon from '@mui/icons-material/Airplay';
import Stack from '@mui/material/Stack';

export default function PortfolioItem(params) {
  const { portfolioItems } = params;

  return (
    <div className="max-w-4xl md:grid md:grid-cols-2">
      {portfolioItems.map((portfolioItem, i) => (
        <div key={i} className="shadow-lg m-5">
          <div className="px-6 py-4 text-center">
            <div className="text-lg md:text-3xl">{portfolioItem.name}</div>
            <div className="md:text-lg p-2">{portfolioItem.desc}</div>
            <div>
              {' '}
              <Image
                className="object-contain m-3"
                src={portfolioItem.image}
                alt={portfolioItem.name}
              />
            </div>
            <div className="p-2 mt-2 flex justify-center">
              <Stack direction="row" spacing={2}>
                <Button
                  href={portfolioItem.link}
                  variant="contained"
                  style={{ backgroundColor: '#3b82f6', color: '#FFFFFF' }}>
                  Live Demo
                </Button>
                <Button
                  href={portfolioItem.github}
                  variant="outlined"
                  style={{ color: '#3b82f6' }}
                  startIcon={<GitHubIcon />}>
                  Source Code
                </Button>
              </Stack>
            </div>
          </div>
          <div className="px-4"></div>
        </div>
      ))}
    </div>
  );
}
