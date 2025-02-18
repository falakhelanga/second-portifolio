import React from "react";
import SideBarContent from "./SideBarContent";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
const SideBar = () => {
  return (
    <div
      style={
        {
          // boxShadow: "0px 0px 10px rgba(0,0,0,0.8)",
        }
      }
      className=" 2xl:w-[15vw] lg:w-[20vw] flex flex-col "
    >
      <div className=" bg-[#24232F] flex-[0.4] row-span-3 w-full">
        <SideBarHeader />
      </div>
      <div className="flex-[1.1] w-full bg-[#201F2A] overflow-y-auto sidebar-content ">
        <SideBarContent />
      </div>
      <div className="flex-[0.1]  w-full bg-[#24232F] flex flex-col px-4 py-1">
        <div className="flex pt-2 items-center mb-1 ">
          <a
            className="text-xs font-bold text-muted uppercase"
            download
            href="/FalakheCv.pdf"
          >
            Download CV
          </a>
          <FileDownloadIcon
            style={{ fontSize: "1rem" }}
            className="text-muted  ml-1"
          />
        </div>
        <SideBarFooter />
      </div>
    </div>
  );
};

export default SideBar;
