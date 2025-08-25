import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SubHeading from "../components/elements/SubHeading";

import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Services from "../components/sections/services";
import styles from "../styles/Home.module.css";
import AllProjectsModal from "../components/sections/projects/AllProjectsModal";

// const numbers = [
//   {
//     number: "5+",
//     text: "Years of experience",
//   },
//   {
//     number: "35",
//     text: "Completed Projects",
//   },
// ];

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <div className="md:p-8 p-4">
        <div className="flex gap-6 md:mb-7 mb-4">
          {/* {numbers.map((item, idx) => (
            <div className="flex items-center gap-2" key={idx}>
              <div className="text-primary font-bold text-xl">
                {item.number}
              </div>
              <div className="text-[#f5f5f5] capitalize text-sm ">
                {item.text}
              </div>
            </div>
          ))} */}
        </div>
        <SubHeading className="mb-4 max-sm:text-center">About me</SubHeading>
        <About />
        <SubHeading className="mb-4 md:mt-14 mt-12 max-sm:text-center">
          My Services
        </SubHeading>
        <Services />
        <SubHeading className="mb-4 md:mt-14 mt-8 max-sm:text-center">
          Projects
        </SubHeading>
        <AllProjectsModal />
      </div>
    </div>
  );
};

export default Home;
