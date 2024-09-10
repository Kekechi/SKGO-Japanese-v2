import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="width-full bg-green-300">
        <div className="mx-auto max-w-screen-lg px-4 flex">
          <h1 className="text-2xl font-bold flex-none px-4">SKGO Japanese</h1>
          <ul className="flex flex-auto">
            <li className=" text-center bg-red-100 border-2 flex-auto py-4">
              <Link href="home" className="text-xl font-bold ">
                Home
              </Link>
            </li>
            <li className=" text-center bg-red-100 border-2 flex-auto py-4">
              <Link href="language" className="text-xl font-bold">
                Language
              </Link>
            </li>
            <li className=" text-center bg-red-100 border-2 flex-auto py-4">
              <Link href="game" className="text-xl font-bold">
                Game
              </Link>
            </li>
            <li className=" text-center bg-red-100 border-2 flex-auto py-4">
              <Link href="" className="text-xl font-bold">
                Anime & Pop Culture
              </Link>
            </li>
            <li className=" text-center bg-red-100 border-2 flex-auto py-4">
              <Link href="culture" className="text-xl font-bold">
                Japanese Culture
              </Link>
            </li>
            <li className="text-center bg-red-100 border-2 flex-auto relative hover:bg-green-200">
              <Link href="about" className="text-xl font-bold">
                <div className="py-4">About Us</div>
              </Link>
              <ul className="fixed mt-2 p-4 bg-green-300">
                <li className=" text-center bg-red-100 border-2 text-lg font-semibold">
                  Mission
                </li>
                <li>Founders</li>
                <li>Volunteers</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
