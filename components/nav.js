import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [navItems] = useState([
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Portfolio",
      url: "/#portfolio",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ]);
  return (
    <div className="px-10">
      <Head>
        <title>Brian Gee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="py-5 mb-12 flex justify-between">
        <Link href="/">
          <h1 className="text-xl">
            Brian Gee
          </h1>
        </Link>
        <ul className="flex items-center">
          {navItems.map((navItem, i) => (
            <li key={i}>
              <Link href={navItem.url}>
                <p className="hover:text-blue-500 px-4 py-2 rounded-md ml-5">
                  {navItem.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
