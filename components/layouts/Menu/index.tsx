import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNav } from "../../../context/nav";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linksVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Menu = () => {
  const { handleToggleNav, isNavOpen } = useNav();
  const [isOpen, setOpen] = useState(false);

  const menuItems = [
    {
      title: "About",
    },
    {
      title: "Services",
    },
    {
      title: "Project",
    },
  ];

  return (
    <div
      className={`bg-[#201F2A]  ${
        isOpen ? "flex-[0.6]" : "flex-[0.1]"
      }  transition-all  duration-500 ease-out relative z-[6]`}
    >
      <div
        className={`bg-[rgb(37,36,49)] ${
          isOpen ? "justify-start" : "justify-center"
        }  flex p-6 items-center`}
      >
        <div className="cursor-pointer" onClick={handleToggleNav}>
          <Hamburger size={20} toggled={isNavOpen} toggle={setOpen} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className="flex flex-col mt-[20rem] h-full items-start pl-8 uppercase gap-8"
          >
            {/* <div className="text-start flex flex-col"> */}
            {menuItems.map((item) => (
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={linksVariants}
                className=" text-muted font-bold md:cursor-pointer hover:text-white  transition-all duration-200"
                key={item.title}
              >
                {item.title}
              </motion.div>
            ))}
            {/* </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
