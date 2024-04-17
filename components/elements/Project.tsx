import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function isOdd(number: number) {
  return number % 2 !== 0;
}

const Project = ({
  project,
  idx,
  height,
}: {
  project: { image: string; title: string; desc: string; link: string };
  idx: number;
  height: string;
}) => {
  const { image, title, desc, link } = project;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-contain h-[30rem] w-[30rem] bg-no-repeat bg-center"
        // alt=""
        // src={image}
        // height={100}
        // width={100}
        // layout="responsive"
        // className="h-[5rem] object-fit"
      >
        <img
          className="h-[30rem] w-[30rem]"
          src={image}
          style={{ visibility: "hidden" }}
        />
      </div>
    </a>

    // <div
    //   style={
    //     {
    //       // backgroundImage: `url(${image})`,
    //     }
    //   }
    //   className={`min-h-[25rem] aspect-square bg-cover object-contain   bg-no-repeat bg-center bg-black relative md:cursor-pointer overflow-y-hidden  project `}
    // >
    //   <Image alt="" src={image} layout="responsive" className="h-[10rem]" />
    //   <div
    //     // style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
    //     className=" absolute top-0 w-full h-full flex items-end "
    //   >
    //     <div className="bg-[#2D2D38] relative top-[10rem] w-full project-desc text-muted p-4 text-sm font-thin ">
    //       <h1 className="text-white  font-semibold mb-1 capitalize">{title}</h1>
    //       <p className="mb-2">{desc}</p>

    //       <a
    //         href={link}
    //         target="_blank"
    //         className="text-[#FBC108] uppercase font-semibold text-[0.7em] flex items-center link-to-visit-site "
    //         rel="noreferrer"
    //       >
    //         <span>Visit this site</span>{" "}
    //         <span className="visit-site">
    //           <ChevronRightIcon style={{ fontSize: "1rem" }} className="" />
    //         </span>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;
