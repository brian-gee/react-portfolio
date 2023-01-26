import Image from 'next/image';
import bg from '../public/bg.jpg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
export default function About() {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2  font-medium  md:text-6xl">
        Brian Geertsma
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl">Fullstack Developer</h3>
      <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl">
        Miami based software developer dedicated to creating projects that
        streamline tasks and enrich our daily lives.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
        <a href="https://github.com/brian-gee">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/brian-geertsma/">
          <BsLinkedin />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={bg} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
