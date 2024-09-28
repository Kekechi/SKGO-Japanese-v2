import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="md:h-screen-nav h-screen-nav-mobile relative">
      <div className="w-full h-full absolute">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={1920}
          height={1038}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center relative z-10 h-full">
        <div className="w-1/3 min-w-min mx-auto rounded p-5 bg-gray-100 bg-opacity-60">
          <h1 className="text-center text-3xl font-bold">SKGO Japanese</h1>
        </div>
        <div className="flex flex-wrap p-2">
          <div className="lg:w-1/4 w-1/2 p-4 aspect-square">
            <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-gray-700">
              <Link href="/language/alphabet">
                <div className="h-full w-full">
                  <Image
                    src="/images/books.png"
                    alt="language"
                    width={540}
                    height={540}
                    className="w-full h-full object-contain m-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-60 flex flex-col justify-center">
                  <h2 className="text-center text-2xl font-bold">Language</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2 p-4 aspect-square">
            <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-gray-700">
              <Link href="/games/vocab">
                <div className="h-full w-full">
                  <Image
                    src="/images/card-games.png"
                    alt="games"
                    width={540}
                    height={540}
                    className="w-full h-full object-contain m-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-60 flex flex-col justify-center">
                  <h2 className="text-center text-2xl font-bold">Games</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2 p-4 aspect-square">
            <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-gray-700">
              <Link href="/presentation">
                <div className="h-full w-full">
                  <Image
                    src="/images/demonslayer.jpg"
                    alt="anime"
                    width={540}
                    height={540}
                    className="w-full h-full object-cover m-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-60 flex flex-col justify-center">
                  <h2 className="text-center text-2xl font-bold">
                    Anime & Pop Culture
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2 p-4 aspect-square">
            <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-gray-700">
              <Link href="/presentation">
                <div className="h-full w-full">
                  <Image
                    src="/images/temple.png"
                    alt="culture"
                    width={540}
                    height={540}
                    className="w-full h-full object-contain m-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-60 flex flex-col justify-center">
                  <h2 className="text-center text-2xl font-bold">
                    Japanese Culture
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
