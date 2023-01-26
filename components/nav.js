import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import bgLogo from '../public/bg-logo.png';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Nav() {
  const [navItems] = useState([
    {
      name: 'Resume',
      url: '/#portfolio',
    },
  ]);
  return (
    <div>
      <Head>
        <title>Brian Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <div>
            <Image src={bgLogo} alt="BG Logo" width={75} height={75}></Image>
          </div>
          <div>
            <ul className="flex items-center">
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-6">
                    {link.name}
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
