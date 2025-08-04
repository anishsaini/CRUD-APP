import React from "react";

export default function AddTopic(){
    return <div>
        <form className="flex flex-col gap-4 ">
            <input className="border border-slate-500 px-8 py-2 " type="text" placeholder="Topic Title"/>
            <input className="border border-slate-500 px-8 py-2 " type="text" placeholder="Topic Description"/>
            <button className=" bg-blue-300 text-white font-bold px-6 py-3 w-fit " >Add Topic</button>
        </form>
    </div>
}