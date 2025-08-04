import React from "react";
import RemoveBtn from "./removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";




export default function TopicList() {
  return ( 
    <>
      <div className="p-4 border border-slate-300 my-5 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">TopicList</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
            <RemoveBtn/>
            <Link className="text-blue-800 cursor-pointer" href="/edittopic/anishsaini"> <HiPencilAlt size={25}/> </Link>
        </div>
      </div>
    </>
  );
}
