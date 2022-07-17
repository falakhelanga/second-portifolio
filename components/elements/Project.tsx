import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Project = ({
  project,
}: {
  project: { image: string; title: string; desc: string; link: string };
}) => {
  const { image, title, desc, link } = project;
  return (
    <div
      className=" bg-black relative md:cursor-pointer overflow-y-hidden project "
      //   style={{
      //     backgroundImage: image,
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //     backgroundPosition: "center",
      //     backgroundOrigin: "content-box",
      //   }}
    >
      <Image
        height={70}
        layout="responsive"
        width={"100%"}
        src={image}
        alt="project image"
      />
      <div
        // style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        className=" absolute top-0 w-full h-full flex items-end "
      >
        <div className="bg-[#2D2D38] relative top-[10rem] w-full project-desc text-muted p-4 text-sm font-thin ">
          <h1 className="text-white  font-semibold mb-1 capitalize">{title}</h1>
          <p className="mb-2">{desc}</p>

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
  );
};

export default Project;
