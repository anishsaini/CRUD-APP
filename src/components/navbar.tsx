import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-between items-center py-4 bg-blue-500 text-black my-4 px-4 rounded px-9 py-3">
            <Link className="text-black font-bold" href="/">CRUD-APP</Link>
            <Link className="bg-white px-2 font-bold" href="/addtopic">Add-Topic</Link>
        </div>
    )
}