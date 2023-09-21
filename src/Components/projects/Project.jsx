import React from 'react';
import { ProjectsData } from "../projects/ProjectsData";
import Title from "../layouts/Title";
import ProjectsCard from './ProjectsCard';

function Project () {
  return (
    <section
      id="projects"
      className="w-full py-20 pt-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {ProjectsData.map((item , index) =>(
            
            <ProjectsCard key={index} title={item.title}  des={item.des} src={item.src.devImg} />
        ))}     
      </div>
    </section>
  );
}

export default Project;