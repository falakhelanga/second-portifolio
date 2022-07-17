import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef} className="w-full bg-[#2D2D38] p-8">
      <p className="text-muted">
        Falakhe is a passionate Full Stack developer with top-notch experience
        in web and mobile application development. This includes full front-end
        and back-end Development.
      </p>
    </div>
  );
};

export default About;
