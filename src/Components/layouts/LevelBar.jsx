import React from "react";
import { motion } from "framer-motion";

function LevelBar(){
    return (
        <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Photoshop</p>
            <span className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span 
                    initial ={{x: "-100%" , opacity : 0}}
                    animate ={{x: 0 , opacity : 1}}
                    transition={{duration : 0.5 , delay : 0.5}}
                    
                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                    <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
    );
}

export default LevelBar;