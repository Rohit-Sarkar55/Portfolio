import React from "react";
import LeftBanner from "./LeftBanner";


function Banner(){

    return <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">

    <LeftBanner />    
    <div className="w-1/2">Hello</div>
    </section>
}

export default Banner;
