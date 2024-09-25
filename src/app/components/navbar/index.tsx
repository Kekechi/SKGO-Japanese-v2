import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="width-full bg-green-300 sticky top-0 z-50">
      {/* Mobile Nav Bar */}
      <div className="md:hidden">
        <div className="h-11 w-full">
          <div className="fixed w-2/3 h-full bg-gray-600 -translate-x-full has-[div:focus]:-translate-x-0 transition-transform">
            {/* Menu Icon */}
            <div className="float-right translate-x-full relative">
              <div
                className="p-2 peer focus:scale-0 focus:rotate-180 transition-transform"
                tabIndex={0}
              >
                <Image
                  src="/images/icons/menu.svg"
                  width={30}
                  height={30}
                  alt="Menu Icon"
                />
              </div>
              <div className="absolute w-full h-full p-2 top-0 left-0 scale-0 -rotate-180 peer-focus:scale-100 peer-focus:rotate-0 transition-transform">
                <Image
                  src="/images/icons/close.svg"
                  width={30}
                  height={30}
                  alt="Menu Icon"
                />
              </div>
            </div>

            <ul className="my-5 mx-3">
              <li className="py-1">
                <Link href="/" className="text-lg font-bold">
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link href="/language" className="text-lg font-bold">
                  Language
                </Link>
              </li>
              <li className=" py-1">
                <Link href="/games" className="text-lg font-bold">
                  Games
                </Link>
              </li>
              <li className="py-1">
                <Link href="/presentations" className="text-lg font-bold">
                  Anime & Pop Culture
                </Link>
              </li>
              <li className=" py-1">
                <Link href="/presentations" className="text-lg font-bold">
                  Japanese Culture
                </Link>
              </li>
              <li className="py-1">
                <Link href="/about/mission" className="text-lg font-bold">
                  About Us
                </Link>
                <ul className="ml-3">
                  <li className="text-md font-semibold">
                    <Link href="/about/mission">Mission</Link>
                  </li>
                  <li className="text-md font-semibold">
                    <Link href="/about/founders">Founders</Link>
                  </li>
                  <li className="text-md font-semibold">
                    <Link href="/about/volunteers">Volunteers</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Nav Bar */}
      <div className="mx-auto max-w-screen-lg px-4 h-14 hidden md:flex">
        <ul className="flex flex-auto justify-between">
          <li className="text-center flex-auto w-min  my-auto">
            <Link href="/" className="text-lg font-bold leading-tight">
              Home
            </Link>
          </li>
          <li className="text-center flex-auto w-min  my-auto">
            <Link href="/language" className="text-lg font-bold leading-tight">
              Language
            </Link>
          </li>
          <li className=" text-center flex-auto w-min  my-auto">
            <Link href="/games" className="text-lg font-bold leading-tight">
              Games
            </Link>
          </li>
          <li className="text-center flex-auto w-min  my-auto">
            <Link
              href="/presentations"
              className="text-lg font-bold leading-tight"
            >
              Anime & Pop Culture
            </Link>
          </li>
          <li className=" text-center flex-auto w-min  my-auto">
            <Link
              href="/presentations"
              className="text-lg font-bold leading-tight"
            >
              Japanese Culture
            </Link>
          </li>
          <li className="group text-center flex-auto w-min relative">
            <div className="text-lg font-bold w-full h-full hover:bg-green-200 flex flex-col justify-center">
              <div className="leading-tight">About Us</div>
            </div>
            <div className="hidden group-hover:block absolute w-full">
              <ul className="p-auto py-4 bg-green-300 drop-shadow mt-1 rounded-lg">
                <li className="text-center text-lg font-medium">
                  <Link href="/about/mission">Mission</Link>
                </li>
                <li className="text-center text-lg font-medium">
                  <Link href="/about/founders">Founders</Link>
                </li>
                <li className="text-center text-lg font-medium">
                  <Link href="/about/volunteers">Volunteers</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
