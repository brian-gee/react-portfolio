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

      <main className="bg-white px-10">
        <section className=" min-h-screen">
          {/* About Me */}
          <div class="text-center p-10 flex flex-col">
            <h2 className="text-5xl py-2 text-blue-500">Brian Geertsma</h2>
            <h3 className="text-2xl py-2">Fullstack Developer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800">
             I&apos;m a South Florida based software developer working on projects to help automate the boring stuff and bring meaning back into our lives. You can check out my github to see the projects that I&apos;m working on and I would love any suggestions for new development. If you&apos;d like to collaborate on any type of projects together feel free to send me an email.
            </p>
          </div>

          <div className="relative mx-auto w-80 h-80 mt-20">
            <Image src={grim} alt='grim-gif' />
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