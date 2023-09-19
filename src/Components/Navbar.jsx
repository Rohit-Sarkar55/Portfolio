import React from "react";
import {Link} from "react-scroll"
import { navLinksData } from "../constant";

function createNavLinkData(item){
    return <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" 
        key={item._id}
        >
        <Link 
        activeClass="active"
        to={item.link}
        spy= {true}
        smooth = {true}
        offset={-70}
        duration={500}
        >
        {item.title}
        </Link>
    </li>
}

function Navbar(){
    return ( <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div >
            <img src="" alt="logo"></img>
        </div>

        <div>
            <ul className="flex items-center gap-10">
            {navLinksData.map(createNavLinkData)}
            </ul>
            
        </div>
    </div>)
}

export default Navbar;