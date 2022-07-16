import React from "react";
import Project from "../../elements/Project";

const projects = [
  {
    title: "The Box fashion",
    image: "/images/tbf.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://theboxfashion.co.za/",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
      {/* <Project image="/images/tbf.png" />
      <Project image="/images/ap.png" />
      <Project image="/images/wbr.png" />
      <Project image="/images/KT.png" /> */}
    </div>
  );
};

export default Projects;
