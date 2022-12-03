import Head from 'next/head';
import Image from 'next/image';
import grim from '../public/grim_cropped.gif'
import Portfolio from '../components/portfolio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Gee</title>
      </Head>

      <main className="text-white px-10">
        <section className="grid grid-cols-2">
          {/* About Me */}
          <div className="text-left p-10">
            <h2 className="text-5xl py-2">Brian Geertsma</h2>
            <h3 className="text-2xl py-2">Fullstack Developer</h3>
            <p className="text-sm py-5 leading-8">
             I&apos;m a South Florida based software developer working on projects to help automate the boring stuff and bring meaning back into our lives.
             </p>
          </div>

          <div className="relative mx-auto w-80 h-80 mt-20">
            <Image src={grim} alt='grim-gif' className='rounded-full' />
          </div>
        </section>

        <section id='portfolio'>
          <div>
            <Portfolio></Portfolio>
          </div>
        </section>

      </main>
    </div>
  );
}