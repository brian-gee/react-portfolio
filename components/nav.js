import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from 'next/link';

export default function Nav(){
  return (
    <div className='bg-white px-10 dark:bg-black'>
      <nav className="py-10 mb-12 flex justify-between">
        <Link href='/'>
          <h1  className="text-xl font-Iosevka dark:text-white">Brian Gee</h1>
        </Link>
          <ul className="flex items-center">
            <li>
              <a className=" bg-gradient-to-r bg-cyan-400 text-white px-4 py-2 rounded-md ml-5" href="/portfolio">
               Portfolio
              </a>
              <a className=" bg-gradient-to-r bg-cyan-400 text-white px-4 py-2 rounded-md ml-5" href="/contact">
               Contact
              </a>
              <a className=" bg-gradient-to-r bg-cyan-400 text-white px-4 py-2 rounded-md ml-5" href="/resume">
                Resume
              </a>

            </li>
          </ul>
        </nav>
    </div>
  )
}