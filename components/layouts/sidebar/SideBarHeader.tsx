import React from "react";

const SideBarHeader = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center py-3">
      <img
        src="/images/fah.jpeg"
        alt="my Image"
        className="rounded-full w-[7rem] h-[7rem] object-contain"
      />
      <h3 className="text-white text-2xl mt-4 font-bold">Falakhe Sivela</h3>
      <p className="text-muted font-thin text-sm mt-2">Full Stack Developer</p>
    </div>
  );
};

export default SideBarHeader;
