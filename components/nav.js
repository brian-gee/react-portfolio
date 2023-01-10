import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import bgLogo from '../public/bg-logo.png';
import Button from './button';

export default function Nav() {
	const [navItems] = useState([
		{
			name: 'Portfolio',
			url: '/#portfolio',
		},
		{
			name: 'Contact',
			url: '/#contact',
		},
	]);
	let [open, setOpen] = useState(false);
	return (
		<div className="px-10">
			<Head>
				<title>Brian Gee</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
					<div
						className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
      text-gray-800"
					>
						<span className="text-3xl text-indigo-600 mr-1 pt-2">
							<ion-icon name="logo-ionic"></ion-icon>
						</span>

						<Image src={bgLogo} alt="BG Logo" width={75} height={75}></Image>
					</div>

					<div
						onClick={() => setOpen(!open)}
						className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
					>
						<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
					</div>

					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? 'top-20 ' : 'top-[-490px]'
						}`}
					>
						{navItems.map((link) => (
							<li key={link.name} className="md:ml-8 text-lg md:text-2xl md:my-0 my-7">
								<Link
									href={link.url}
									className="text-gray-800 hover:text-gray-400 duration-500"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
