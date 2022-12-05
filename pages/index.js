import Head from 'next/head';
import Image from 'next/image';
import grim from '../public/grim_cropped.gif';
import Portfolio from '../components/portfolio';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Brian Gee</title>
			</Head>

			<main className="text-white px-10">
				<section className="flex justify-center">
					<div className="flex justify-between max-w-7xl px-12">
						<div className="text-left p-10">
							<h2 className="text-5xl py-2">Brian Geertsma</h2>
							<h3 className="text-2xl py-2">Fullstack Developer</h3>
							<p className="text-sm py-5 leading-8 max-w-xl">
								I&apos;m a South Florida based software developer working on
								projects to help automate the boring stuff and bring meaning
								back into our lives.
							</p>
						</div>
						<div className="grid justify-end">
							<Image src={grim} alt="grim-gif" className="rounded-full border-2 border-gray-500" />
						</div>
					</div>
				</section>

				<section id="portfolio">
					<div className="mt-20">
						<Portfolio></Portfolio>
					</div>
				</section>
			</main>
		</div>
	);
}
