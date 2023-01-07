import Head from 'next/head';
import Image from 'next/image';
import bg from '../public/bg.jpg';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Brian Gee</title>
			</Head>

			<main>
				<section className="flex justify-center pt-20">
					<div className="flex justify-between max-w-7xl px-12">
						<div className="text-left p-10">
							<h2 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight py-2">Brian Geertsma</h2>
							<h3 className="text-lg md:text-2xl py-2">Fullstack Developer</h3>
							<p className="text-xs md:text-sm py-5 leading-8 max-w-xl">
								As a South Florida-based developer, I am dedicated to creating
								projects that streamline tasks and bring more purpose
								and fulfillment to our daily lives.
							</p>
						</div>
						<div className="grid justify-end">
							<Image
								src={bg}
								alt="bg"
								className="rounded-xl"
								width={300}
								height={300}
								style={{
									maxWidth: '95%',
									height: 'auto',
								}}

							/>
						</div>
					</div>
				</section>

				<section id="portfolio">
					<div className="mt-20">
						<Portfolio></Portfolio>
					</div>
				</section>

				<section id="contact">
					<div>
            <Contact></Contact>
          </div>
				</section>
			</main>
		</div>
	);
}
