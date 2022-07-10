import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[50vh]  w-full  "
      ></div>
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        className=" absolute top-0 w-full h-full p-8"
      >
        <div
          style={{ backgroundColor: "rgba(192,192,192,0.2)" }}
          className="h-full w-full flex  flex-col justify-center px-6 "
        >
          <h1 className="text-6xl font-extrabold">
            Discover my Amazing Art Space!
          </h1>
          <div className="flex mt-6 text-2xl">
            <span className="text-primary">{`<code>`}</span>
            <span className="mr-2">I build</span>
            <Typewriter
              options={{
                strings: [
                  "ios and android applications.",
                  "web interfaces.",
                  "Apis",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <span className="text-primary">{`</code>`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
