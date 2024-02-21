import React, { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef} className="w-full bg-[#2D2D38] p-8">
      <p className="text-muted">
        I am a Versatile Full Stack Developer with a passion for crafting
        seamless digital experiences. Proficient in TypeScript, Python, Dart and
        adept at utilizing cutting-edge technologies such as Node.js, Next.js,
        React.js,Django and Flutter. I specialize in cloud computing, seamlessly
        integrating AWS and Google Cloud services. My expertise extends to
        Docker for efficient containerization, while my backend prowess shines
        through in Django. Committed to delivering scalable solutions, I thrive
        on pushing the boundaries of innovation in software development.
        Let&apos;s build the future together!
      </p>
    </div>
  );
};

export default About;
