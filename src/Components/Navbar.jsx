import React from "react";
import logo from "../logo.svg";
import { navLinksData } from "../constant";

function createNavLinkData(item){
    return <li key={item._id}>{item.title}</li>
}

function Navbar(){
    return ( <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div >
            <img src="../logo.svg" alt="logo"></img>
        </div>

        <div>
            <ul className="flex items-center gap-10">
            {navLinksData.map(createNavLinkData)}
            </ul>
            
        </div>
    </div>)
}

export default Navbar;