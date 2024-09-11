import React from "react";
import Image from "next/image";

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
    </div>
  );
};

export default Home;
