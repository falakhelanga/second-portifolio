import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const SideBarFooter = () => {
  return (
    <div className="w-full h-full flex text-gray-500  items-center justify-between ">
      <a
        href="https://github.com/falakhelanga"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://linkedin.com/in/falakhe-sivela-1387a6128"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://facebook.com/fah.falakhe"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon />
      </a>
    </div>
  );
};

export default SideBarFooter;
