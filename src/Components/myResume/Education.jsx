import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
import { educationData } from "../../constant/educationData";

function createEducationData(item){
    return <ResumeCard
        key={item.id}
        title={item.degree}
        stream={item.stream ? item.stream : ""}
        subTitle= {`${item.institution} ${item.year}`} 
        result={item.result}
        des={item.des}
     />
}
function Education(){
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }} 
        className="flex gap-20">

    <div>   
    <div className="py-12 font-titleFont"> 
        <p className="text-sm text-designColor tracking-[4px]">Details</p>
        <h2 className="font-bold text-4xl"></h2>
    </div>
    <div className="w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
        {educationData.map(createEducationData)}
    </div>
    </div>
    
    {/* <div>
    <div >   
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
    </div> */}

    </motion.div>
    );
}

export default Education;