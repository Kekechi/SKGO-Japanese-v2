import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavigationCard = ({
  url,
  image,
  alt,
  text,
}: {
  url: string;
  image: string;
  alt: string;
  text: string;
}) => {
  return (
    <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-gray-700">
      <Link href={url}>
        <div className="h-full w-full">
          <Image
            src={image}
            alt={alt}
            width={540}
            height={540}
            className="w-full h-full object-contain m-auto"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-60 flex flex-col justify-center">
          <h2 className="text-center text-2xl font-bold">{text}</h2>
        </div>
      </Link>
    </div>
  );
};

export default NavigationCard;
