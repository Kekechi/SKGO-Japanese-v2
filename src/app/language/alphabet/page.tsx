import React from "react";
import Pagination from "@/app/components/pagination";
import pagelist from "../pagelist";

const path = "/language/alphabet";
const pageIndex = pagelist.findIndex((page) => page.url === path);

const Alphabet = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <div className="flex justify-center py-2">
        <h1 className="text-xl font-medium">
          Japanese Alphabet <br /> ひらがな あいうえお
        </h1>
      </div>
      <Pagination
        prev={pageIndex === 0 ? undefined : pagelist[pageIndex - 1]}
        next={
          pageIndex === pagelist.length - 1
            ? undefined
            : pagelist[pageIndex + 1]
        }
        pageSelect={{ title: "Select", url: "/language/select" }}
      />
      Alphabet
    </div>
  );
};

export default Alphabet;
