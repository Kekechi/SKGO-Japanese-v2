import React from "react";
import NavigationCard from "@/app/components/cards/navigation-card";
import pagelist from "../pagelist";

const PageSelect = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4">
      <h1 className="text-center text-xl py-2">Language Pages</h1>
      <div className="flex flex-wrap">
        {pagelist.map((page) => (
          <div
            className="w-1/2 aspect-square lg:w-1/4 xl:w-1/6 p-2"
            key={page.url + page.title}
          >
            <NavigationCard
              url={page.url}
              image={page.thumbnail}
              alt={page.title}
              text={page.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSelect;
