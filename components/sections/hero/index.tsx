import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div id="hero" className="relative">
      <div
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[80vh] md:h-[55vh] lg:h-[50vh] w-full"
      ></div>
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        className="absolute top-0 w-full h-full  md:px-8 md:py-8"
      >
        <div
          style={{ backgroundColor: "rgba(192,192,192,0.15)" }}
          className="h-full w-full flex flex-col justify-center md:justify-center px-4 md:px-6 md:rounded-lg backdrop-blur-[1px]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold max-w-[55ch]">
            Engineering Web, Mobile & AI Agent Systems
          </h1>
          <div className="flex flex-wrap items-center mt-6 text-xl sm:text-2xl font-medium">
            <span className="text-primary mr-2">{`<code>`}</span>
            <span className="mr-2">I build</span>
            <Typewriter
              options={{
                strings: [
                  "AI Agents",
                  "MCP Servers",
                  "LangChain Pipelines",
                  "LangGraph Workflows",
                  "Deep Research Agents",
                  "Web & Mobile Apps",
                  "APIs",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <span className="text-primary ml-2">{`</code>`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
