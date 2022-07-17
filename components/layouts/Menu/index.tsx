import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNav } from "../../../context/nav";
import CloseIcon from "@mui/icons-material/Close";
const Menu = () => {
  return (
    <div className="bg-[#201F2A] flex-[0.03] ">
      <div className="bg-[rgb(37,36,49)] p-6 flex justify-center items-center">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Menu;
