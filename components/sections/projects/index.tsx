import React from "react";
import Project from "../../elements/Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <Project image="/images/tbf.png" />
      <Project image="/images/ap.png" />
      <Project image="/images/wbr.png" />
      <Project image="/images/KT.png" />
    </div>
  );
};

export default Projects;
