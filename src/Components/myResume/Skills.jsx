import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";


function Skills(){
    return (
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }} 
        className="flex gap-20">

    <div className="bg-green-600 w-1/2">   
    <div className="py-12 font-titleFont"> 
        <p className="text-sm text-designColor tracking-[4px]">Details</p>
        <h2 className="font-bold text-4xl"> Design Skills </h2>
    </div>
    <div className="mt-14 w-full flex flex-col gap-6">
        <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshop</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span 
                    initial ={{x: "-100%" , opacity : 0}}
                    animate ={{x: 0 , opacity : 1}}
                    transition={{duration : 0.5 , delay : 0.5}}
                    
                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                    <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>

        <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshop</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span 
                    initial ={{x: "-100%" , opacity : 0}}
                    animate ={{x: 0 , opacity : 1}}
                    transition={{duration : 0.5 , delay : 0.5}}
                    
                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                    <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>

        <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshop</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span 
                    initial ={{x: "-100%" , opacity : 0}}
                    animate ={{x: 0 , opacity : 1}}
                    transition={{duration : 0.5 , delay : 0.5}}
                    
                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                    <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>

    </div>
    </div>
    


 









    <div className="w-1/2 bg-blue-600">
    <div >   
    <div className="py-12 font-titleFont"> 
        <p className="text-sm text-designColor tracking-[4px]">Details</p>
        <h2 className="font-bold text-4xl"> Design Skills </h2>
    </div>
    <div className="mt-14 w-full flex flex-col">
        Hello
        
    </div>
    </div>
    </div>

    </motion.div>
    );
}

export default Skills;