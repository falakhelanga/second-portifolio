import React, { FC, useState } from "react";
import Nav from "../sections/nav";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import SideBar from "./sidebar";
import { useNav } from "../../context/nav";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { isNavOpen } = useNav();

  return (
    <div
      className={`mx-auto flex justify-center w-full items-center w-screen h-screen overflow-hidden text-white bg-[#191923] `}
    >
      <div className=" md:w-[98%] 2xl:w-[90%] h-[98vh] flex  overflow-hidden relative">
        {isNavOpen && (
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] z-[5]"></div>
        )}
        <Nav />
        <SideBar />
        <Main>{children}</Main>
        <Menu />
      </div>
    </div>
  );
};

export default LayOut;
