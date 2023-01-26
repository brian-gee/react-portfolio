import Head from 'next/head';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import About from '../components/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
				{/* About Section */}
        <section id="about">
          <div className="mt-20">
            <About />
          </div>
        </section>

				{/* Portfolio Section */}
        <section id="portfolio">
          <div className="mt-20">
            <Portfolio />
          </div>
        </section>

				{/* Contact Section */}
        <section id="contact">
          <div>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
