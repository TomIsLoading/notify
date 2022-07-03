import React from "react";
import { BsClock } from "react-icons/bs";

export default function TableHeader() {
  return (
    <div className="grid grid-cols-player mx-auto py-2 px-4 mb-2 border-b-[1px] border-border">
      <span className="col-span-1 font-textLight">#</span>
      <span className="col-span-5 font-textLight">TITLE</span>
      <span className="col-span-5 font-textLight">ALBUM</span>
      <span className="col-span-1 font-textLight">
        <BsClock size="18px" />
      </span>
    </div>
  );
}
