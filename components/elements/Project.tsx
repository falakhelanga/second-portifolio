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
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block group focus:outline-none focus:ring-2 focus:ring-primary/70 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-contain bg-no-repeat bg-center w-full max-w-[26rem] md:max-w-[28rem] aspect-[1/1] sm:aspect-[4/3] mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
      >
        {/* Maintain aspect ratio using invisible next/image */}
        <span className="block w-full h-full opacity-0">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            priority={idx < 2}
          />
        </span>
      </div>
      <div className="mt-2 text-center text-sm text-muted max-w-[26rem] mx-auto px-2 line-clamp-3 hidden sm:block">
        {title}
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
