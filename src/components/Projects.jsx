import React from "react";
import projectList from "./projects-components/projects";
import Heading from "./universal-components/Heading";
import ProjectBox from "./projects-components/ProjectBox";


function Projects() {
  return (
    <section id="projects" className="mt-28 flex flex-col w-full ">
      <Heading subheading="My Recent Works" heading="Projects" />

      <div className="lg:px-20 flex items-start justify-evenly flex-wrap gap-5">
        {projectList.map((element, index) => (
          <ProjectBox
            key={index}
            name={element.name}
            image={element.image}
            github={element.github}
            live={element.live}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
