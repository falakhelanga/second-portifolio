import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SubHeading from "../components/elements/SubHeading";

import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Services from "../components/sections/services";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className="p-8">
        <SubHeading className="mb-4">About me</SubHeading>
        <About />
        <SubHeading className="mb-4 mt-8">My Services</SubHeading>
        <Services />
        <SubHeading className="mb-4 mt-8">Projects worked on</SubHeading>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
