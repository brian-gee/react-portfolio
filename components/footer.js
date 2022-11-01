import {BsLinkedin, BsGithub} from 'react-icons/bs';

export default function Footer(){
  return (
      <footer className="pt-20 mt-auto">
          <div className="text-5xl flex justify-center py-3 text-gray-600 space-x-10">
            <a href="https://www.linkedin.com/in/brian-geertsma-983052240/"><BsLinkedin /></a>
            <a href="https://github.com/brian-gee"><BsGithub  /></a>
          </div>
          <span class="flex justify-center pt-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022&nbsp;<a href="https://briang.xyz/" class="hover:underline"> Brian Geertsma</a>. All Rights Reserved.
          </span>
        </footer>
  )
}