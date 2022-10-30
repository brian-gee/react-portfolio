import {BsLinkedin, BsGithub} from 'react-icons/bs';

export default function Footer(){
  return (
    <div className='bg-white p-10 dark:bg-black'>
      <footer className="pt-20">
          <div className="text-5xl flex justify-center py-3 text-gray-600 space-x-10">
            <a href="https://www.linkedin.com/in/brian-geertsma-983052240/"><BsLinkedin /></a>
            <a href="https://github.com/brian-gee"><BsGithub  /></a>
          </div>
        </footer>
    </div>
  )
}