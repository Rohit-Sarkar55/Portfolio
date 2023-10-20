import React from "react";
import ResumeCard from "../ResumeCard";
import { motion } from "framer-motion";
import LevelBar from "../../layouts/LevelBar";

function createSkillLevelData(item){
    return (
        <LevelBar 
        key= {item.id}
        name={item.name}
        level={item.level}
        />
    )
}

function Skills({name , skills}){
    
    return (
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }} 
        className="mt-10 flex gap-20 border-l-[6px] border-black border-opacity-30">

    <div className="w-full flex flex-col gap-10">   
    
    
    <div className="py-12 font-titleFont flex group">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center 
                    items-center bg-black bg-opacity-60">
                        <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>

            </span>
        </div>
        <div className="w-full bgOpacity py-8 pl-10">
            {/* <p className="text-sm text-designColor tracking-[4px]">Details</p> */}
            <h2 className="font-bold text-4xl"> {name} </h2>

            <div className="mt-14 w-full grid grid-cols-2 gap-20">
                {skills.map(createSkillLevelData)}
            </div>
        </div>
        
    </div>

        {/* //////////////////////////////// */}


    



    
    </div>
    


 









    

    </motion.div>
    );
}

export default Skills;