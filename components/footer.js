import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer className="pt-20 mt-auto">
			<div className="text-5xl flex justify-center py-3 space-x-10">
				<a href="https://github.com/brian-gee" className="hover:text-6xl">
					<BsGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/brian-geertsma/"
					className="hover:text-6xl"
				>
					<BsLinkedin />
				</a>
			</div>
			<span className="flex justify-center py-5 text-sm sm:text-center">
				© 2022&nbsp;
				<a href="https://briang.xyz/" className="hover:underline">
					Brian Geertsma
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}
