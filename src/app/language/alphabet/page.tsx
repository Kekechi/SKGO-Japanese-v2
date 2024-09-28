import React from "react";
import Pagination from "@/app/components/pagination";

const Alphabet = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2">
      <div className="flex justify-center py-2">
        <h1 className="text-xl font-medium">
          Japanese Alphabet <br /> ひらがな あいうえお
        </h1>
      </div>
      <Pagination
        // prev={{ title: "prev", url: "/" }}
        next={{ title: "next", url: "/" }}
        pageSelect={{ title: "Select", url: "/language/select" }}
      />
      Alphabet
    </div>
  );
};

export default Alphabet;
