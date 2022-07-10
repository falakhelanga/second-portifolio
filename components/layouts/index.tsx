import React, { FC, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import SideBar from "./sidebar";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`mx-auto flex justify-center w-full items-center w-screen h-screen overflow-hidden text-white bg-[#191923]`}
    >
      <div className=" md:w-[98%] 2xl:w-[78%] h-[98vh] flex  overflow-hidden ">
        <SideBar />
        <Main>{children}</Main>
        <Menu />
      </div>
    </div>
  );
};

export default LayOut;
