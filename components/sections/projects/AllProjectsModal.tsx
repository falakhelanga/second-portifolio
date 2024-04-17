import React from "react";
import { projects } from ".";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AllProjectsModal = () => {
  return (
    <div className=" h-full grid grid-cols-2 justify-center gap-8">
      {projects.map(({ image, title, desc, link }, idx) => (
        <div
          key={idx}
          style={
            {
              // backgroundImage: `url(${image})`,
            }
          }
          className={`h-[20rem] w-full aspect-square bg-cover object-contain   bg-no-repeat bg-center bg-black relative md:cursor-pointer overflow-y-hidden  project `}
        >
          <img src={image} className="w-full h-full" />
          <div
            // style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            className=" absolute top-0 w-full h-full flex items-end "
          >
            <div className="bg-[#2D2D38] relative top-[10rem] w-full project-desc text-muted p-4 text-sm font-thin ">
              <h1 className="text-white  font-semibold mb-1 capitalize">
                {title}
              </h1>
              <p className="mb-2 text-sm">{desc}</p>

              <a
                href={link}
                target="_blank"
                className="text-[#FBC108] uppercase font-semibold text-[0.7em] flex items-center link-to-visit-site "
                rel="noreferrer"
              >
                <span>Visit this site</span>{" "}
                <span className="visit-site">
                  <ChevronRightIcon style={{ fontSize: "1rem" }} className="" />
                </span>
              </a>
            </div>
          </div>
        </div>

        // <div
        //   style={{
        //     backgroundImage: `url(${project.image})`,
        //     // boxShadow: "0px 0px 0px 10px rgba(0,0,0,0.7)",
        //   }}
        //   className="bg-contain bg-blue-600  bg-no-repeat bg-center h-[20rem] w-full col-span-1"
        //   key={idx}
        // >
        //   <img src={project.image} className="w-full h-full" />
        // </div>
      ))}
    </div>
  );
};

export default AllProjectsModal;
