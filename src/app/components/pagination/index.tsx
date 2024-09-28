import React from "react";
import Link from "next/link";

declare type Page = {
  url: string;
  title: string;
};

const Pagination = ({
  prev,
  next,
  pageSelect,
}: {
  prev?: Page;
  next?: Page;
  pageSelect?: Page;
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-start">
        {prev && (
          <Link
            href={prev.url}
            className="p-2 rounded border flex justify-between bg-green-200 font-semibold w-min"
          >
            <div className="pr-1">{"<"}</div>
            <div>{prev.title}</div>
          </Link>
        )}
      </div>

      <div className="flex justify-center">
        {" "}
        {pageSelect && (
          <Link
            href={pageSelect.url}
            className="p-2 rounded border flex justify-between bg-green-200 font-semibold w-min"
          >
            <div>{pageSelect.title}</div>
          </Link>
        )}
      </div>

      <div className="flex justify-end">
        {" "}
        {next && (
          <Link
            href={next.url}
            className="p-2 rounded border flex justify-between bg-green-200 font-semibold w-min"
          >
            <div>{next.title}</div>
            <div className="pl-1">{">"}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
