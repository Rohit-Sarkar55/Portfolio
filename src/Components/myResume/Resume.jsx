import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";
function Resume(){
 return <section id="resume"
    className="w-full py-20 pt-20 border-b-[1px] border-b-black">

    <div className="flex justify-center items-center text-center">
        <Title title="" des= "My Resume" />
    </div>

    <div >
        <ul className="w-full grid grid-cols-4 pt-20 gap-10">
            <li className="resumeLi">  Education </li>
            <li className="resumeLi"> Skills </li>
            <li className="resumeLi"> Experience </li>
            <li className="resumeLi"> Achivements </li>
        </ul>
    </div>
    
    <div className="bg-red-600">   
    <div className="py-12 font-titleFont"> 
        <p className="text-sm text-designColor tracking-[4px]">Details</p>
        <h2 className="font-bold text-4xl"></h2>
    </div>
    <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
        Hello
        <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

        <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
    </div>
    </div> 
 </section>
}

export default Resume;