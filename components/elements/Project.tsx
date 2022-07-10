import Image from "next/image";
import React from "react";

const Project = ({ image }: { image: string }) => {
  return (
    <div
      className=" bg-black relative  "
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
        className=" absolute top-0 w-full h-full p-8"
      ></div>
    </div>
  );
};

export default Project;
