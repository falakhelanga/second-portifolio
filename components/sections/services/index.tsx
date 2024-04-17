import React, { useRef } from "react";
import Service, { ServiceProps } from "../../elements/Service";

const services: ServiceProps[] = [
  {
    title: "Custom Software Development",
    description:
      "Transform your ideas into powerful, scalable, and user-friendly software solutions. From concept to deployment, I specialize in crafting bespoke software tailored to your unique requirements.",
  },
  {
    title: "Web Application Development",
    description:
      "Create a strong online presence with dynamic and responsive web applications. I design and develop web solutions that not only meet your current needs but also scale with your business as it grows.",
  },
  {
    title: "Mobile App Development",
    description:
      "Reach your audience on the go with custom mobile applications for iOS and Android. Whether it's a standalone app or integration with existing systems, I deliver intuitive and high-performance mobile solutions.",
  },
  {
    title: " API Development and Integration",
    description:
      "Build robust APIs to connect and streamline your software ecosystem. I specialize in designing APIs that enhance communication between different services, ensuring seamless integration and data flow.",
  },
  // {
  //   title: "Database Design and Optimization",
  //   description:
  //     "Organize and manage your data efficiently with expert database solutions. I design, implement, and optimize databases to ensure data integrity, performance, and scalability for your applications.",
  // },
  {
    title: "Code Review and Optimization",
    description:
      "Ensure the quality and efficiency of your codebase with thorough code reviews. I identify potential issues, optimize performance, and implement best practices to enhance the maintainability of your software.",
  },
  {
    title: "Maintenance and Support",
    description:
      "Ensure the longevity and smooth operation of your software with ongoing maintenance and support. I offer timely updates, bug fixes, and proactive monitoring to keep your applications running at peak performance.",
  },
  // {
  //   title: "Front End Development (Web And Mobile)",
  //   description: [
  //     "Building Mobile and Web interfaces.",
  //     "Determining the structure and design of web and mobile pages.",
  //     "Ensuring user experience determines design choices.",
  //     "Developing features to enhance the user experience.",
  //     "Striking a balance between functional and aesthetic design.",
  //     "Ensuring web design is optimized for smartphones.",
  //     "Building reusable code for future use.",
  //     "Optimizing web pages for maximum speed and scalability.",
  //     "Utilizing a variety of markup languages to write web pages.",
  //     "Maintaining brand consistency throughout the design.",
  //   ],
  // },
  // {
  //   title: "Back End Development Development",
  //   description: [
  //     "Integration of user-facing elements developed by a front-end developers with server side logic",
  //     "Building reusable code and libraries for future use",
  //     "Building Restful and GraphQl apis",
  //     "Optimization of the application for maximum speed and scalability",
  //     "Implementation of security and data protection",
  //     "Design and implementation of data storage solutions",
  //   ],
  // },
  // {
  //   title: "Back end Development",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  // },
];

const Services = () => {
  const serviceRef = useRef(null);
  return (
    <div ref={serviceRef} className="grid grid-cols-3 gap-6">
      {services.map((service) => (
        <Service
          key={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
