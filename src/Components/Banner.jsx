import React from "react";
import  { useTypewriter , Cursor } from "react-simple-typewriter";


function Banner(){
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });


    return <section id="home" className="w-full pb-20 flex border-b-[1px] font-titleFont border-b-black">

    <div className="w-1/2">
        <div className="flex flex-col gap-5">
            <h4 className="text-lg font-normal"> Welcome to Ro-Verse</h4>
            
            <h1 className="text-white text-6xl font-bold">
                Hi I'm 
                <span className="text-designColor capitalize"> Rohit Sarkar</span>
            </h1>

            <h2 className="text-white text-4xl font-bold">
                a <span> {text}</span>
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
            I use animation as a third dimension by which to simplify experiences
            and kuiding thro each and every interaction. I'm not adding motion
            just to spruce things up, but doing it in ways that.
            </p>
        </div>
    </div>
    <div className="w-1/2"></div>
    </section>
}

export default Banner;