import React, { useCallback } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNav } from "../../../context/nav";

const links = [
  {
    name: "about",
    link: "aboutRef",
  },
  {
    name: "services",
    link: "serviceRef",
  },
  {
    name: "projects",
    link: "projectRef",
  },
];

const Nav = () => {
  // const { isNavOpen } = useNav();
  const scrollToSection = useCallback((elementRef: any) => {
    window?.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <div></div>
    // <div
    //   style={{ zIndex: 99 }}
    //   className={`ease duration-500 transition-all  bg-[#201F2A]  absolute top-0 ${
    //     isNavOpen ? "right-[4rem]" : "right-[-12rem]"
    //   }  h-full px-6 flex flex-col justify-center `}
    // >
    //   <ul>
    //     {links.map((link) => (
    //       <li
    //         onClick={() => {
    //           scrollToSection(link.link);
    //         }}
    //         key={link.name}
    //         className="flex justify-between gap-10 mb-4 cursor-pointer"
    //       >
    //         <span className="text-muted ">{link.name}</span>{" "}
    //         <span className="visit-site">
    //           <ChevronRightIcon className="text-[1.5em]" />
    //         </span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Nav;
