import Image from 'next/image';
import bgLogo from '../public/bg-logo.png';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [navItems] = useState([
    {
      name: 'Resume',
      url: 'https://drive.google.com/uc?id=1T-amiFBc57e334GHcQy03M8Db6dg-1DD&export=download',
    },
  ]);
  return (
    <div>
      <div className="p-10">
        <nav className="flex justify-between">
          <div>
            <Image src={bgLogo} alt="BG Logo" width={80} height={80}></Image>
          </div>
          <div>
            <ul className="flex items-center">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link href={link.url}>
                    <button className="btn btn-block btn-md btn-primary ml-4">
                      Resume
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
