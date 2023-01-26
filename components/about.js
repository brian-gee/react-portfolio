import Image from 'next/image';
import bg from '../public/bg.jpg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
export default function About() {
  return (
    <div>
      <section className="flex justify-center pt-20">
        <div className="flex justify-between max-w-7xl px-12">
          <div className="text-left p-10">
            <h2 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight py-2">
              Brian Geertsma
            </h2>
            <h3 className="text-lg md:text-2xl py-2">Fullstack Developer</h3>
            <p className="text-gray-600 text-xs md:text-sm py-5 leading-8 max-w-xl">
              Miami based software developer dedicated to creating projects that
              streamline tasks and enrich our daily lives.
            </p>
            <div className="text-5xl flex justify-start py-3 space-x-10">
              <a href="https://github.com/brian-gee" className="hover:text-6xl">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/brian-geertsma/"
                className="hover:text-6xl text-blue-500">
                <BsLinkedin />
              </a>
            </div>
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
    </div>
  );
}
