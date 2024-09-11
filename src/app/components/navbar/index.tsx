import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="width-full bg-green-300">
        {/* Mobile Nav Bar */}
        <div className="md:hidden">
          <div>
            <div></div>
            <div>
              <Image />
            </div>
          </div>
        </div>
        {/* Desktop Nav Bar */}
        <div className="mx-auto max-w-screen-lg px-4 flex hidden md:block">
          <h1 className="text-2xl font-bold flex-none p-3">SKGO Japanese</h1>
          <ul className="flex flex-auto">
            <li className="text-center flex-auto py-3">
              <Link href="/" className="text-lg font-bold ">
                Home
              </Link>
            </li>
            <li className="text-center flex-auto py-3">
              <Link href="/language" className="text-lg font-bold">
                Language
              </Link>
            </li>
            <li className=" text-center flex-auto py-3">
              <Link href="/games" className="text-lg font-bold">
                Games
              </Link>
            </li>
            <li className="text-center flex-auto py-3">
              <Link href="/presentations" className="text-lg font-bold">
                Anime & Pop Culture
              </Link>
            </li>
            <li className=" text-center flex-auto py-3">
              <Link href="/presentations" className="text-lg font-bold">
                Japanese Culture
              </Link>
            </li>
            <li className="group text-center flex-auto relative">
              <div className="text-lg font-bold w-full h-full hover:bg-green-200">
                <div className="py-3">About Us</div>
              </div>
              <div className="hidden group-hover:block fixed ">
                <ul className="p-4 bg-green-300 drop-shadow mt-1">
                  <li className="text-center text-lg font-semibold">
                    <Link href="/about/mission">Mission</Link>
                  </li>
                  <li>
                    <Link href="/about/founders">Founders</Link>
                  </li>
                  <li>
                    <Link href="/about/volunteers">Volunteers</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
