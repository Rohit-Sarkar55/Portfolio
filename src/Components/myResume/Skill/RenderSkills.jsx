import React from "react";
import { skillsData } from "../../../constant/skillsData";
import Skills from "./Skills";

function createSkillData(item){
    return (
        <Skills
        key={item.id}
        name={item.name}
        skills={item.skills}
        />
    )
}

function RenderSkills() {
    return (skillsData.map(createSkillData) )
}

export default RenderSkills;