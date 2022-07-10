import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  faBars,
  faEnvelope,
  faMoon,
  faSun,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-full h-[15vh] md:w-[90%] 2xl:w-[70%] flex justify-between sticky top-0   items-center">
      <div className="flex">
        <div className="flex">
          <a
            href="https://github.com/falakhelanga"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            className="ml-4"
            href="https://linkedin.com/in/falakhe-sivela-1387a6128"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          {darkMode && (
            <LightModeIcon
              className="md:cursor-pointer"
              onClick={() => {
                setDarkMode((currState) => !currState);
              }}
            />
          )}
          {!darkMode && (
            <NightlightIcon
              className="md:cursor-pointer"
              onClick={() => {
                setDarkMode((currState) => !currState);
              }}
            />
          )}
        </div>

        <FontAwesomeIcon className=" ml-6" icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
