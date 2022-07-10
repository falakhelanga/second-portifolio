import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" 2xl:flex-[1.3] lg:flex-[0.9] h-full w-full  flex overflow-auto main">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Main;
