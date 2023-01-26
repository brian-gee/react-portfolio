import Image from 'next/image';
import bgLogo from '../public/bg-logo.png';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Nav() {
  const [navItems] = useState([
    {
      name: 'Resume',
      url: '',
    },
  ]);
  return (
    <div>
      <div className="bg-white p-10">
        <nav className="flex justify-between">
          <div>
            <Image src={bgLogo} alt="BG Logo" width={80} height={80}></Image>
          </div>
          <div>
            <ul className="flex items-center">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Button
                    href={link.url}
                    className="ml-4"
                    variant="contained"
                    style={{ backgroundColor: '#3b82f6', color: '#FFFFFF' }}>
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
