import React from "react";
import Project from "../../elements/Project";

const projects = [
  {
    title: "The Box fashion",
    image: "/images/tbf.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://theboxfashion.co.za/",
  },
  {
    title: "Turnkey Boss",
    image: "/images/turnkey.png",
    desc: "Turnkey Boss is the specialist branding, logistics and warehouse company that provides innovative and efficient brand solutions.",
    link: "https://turnkeyboss.co.za/",
  },
  {
    title: "Atims",
    image: "/images/atims.png",
    desc: "ATIMS is the newest and most comprehensive search and booking tool for booking radio advertising breaks, right across South Africa.",
    link: "https://www.atims.co.za/",
  },
  {
    title: "Keg Tracker",
    image: "/images/KT.png",
    desc: "Realtime dashboards of your inventory help you make decisions to better run your brewery or logistics chain. ",
    link: "https://staging.kegtracker.co.za/",
  },
  {
    title: "Wild Bird Revolution",
    image: "/images/wbr.png",
    desc: "The Wild Bird Revolution is a community that loves to share beautiful images of wild birds from all over the world. ",
    link: "https://wildbirdrevolution.org/",
  },
  {
    title: "keg tracker app",
    image: "/images/KT-APP.png",
    desc: "The kegtracker app is an extension of the Keg tacker browser based platform",
    link: "https://play.google.com/store/apps/details?id=com.bigbrave.kegtracker",
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
