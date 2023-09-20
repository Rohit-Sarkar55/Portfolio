import React from "react";
import Title from "./layouts/Title";
import Card from "./Card";
import { featuresData } from "../constant/featuresData";

function Features(){
    return <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
        
        <Title title="Features" des="What I Do" />
        <div className= "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 pt-20" >
            
        {featuresData.map((item)=>{
            return <Card key={item.id} item={item}/>
        })}
        
        </div>
    </section>
}

export default Features;