import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Link from "next/link"; 

export default function RemoveBtn(){
    return(
        <div>
            <button className="text-red-400"><HiOutlineTrash size={25}/></button>

        </div>
    )
}