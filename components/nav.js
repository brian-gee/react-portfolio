import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Nav(){
  return (
    <div className='bg-white px-10 dark:bg-black'>
      <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Iosevka dark:text-white">Brian Gee</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li>
                <a className=" bg-gradient-to-r bg-cyan-400 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
    </div>
  )
}