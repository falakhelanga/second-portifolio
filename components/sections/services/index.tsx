import React, { useRef } from "react";
import Service from "../../elements/Service";

const services = [
  {
    title: "Front End Development (Web And Mobile)",
    description: [
      "Building Mobile and Web interfaces.",
      "Determining the structure and design of web and mobile pages.",
      "Ensuring user experience determines design choices.",
      "Developing features to enhance the user experience.",
      "Striking a balance between functional and aesthetic design.",
      "Ensuring web design is optimized for smartphones.",
      "Building reusable code for future use.",
      "Optimizing web pages for maximum speed and scalability.",
      "Utilizing a variety of markup languages to write web pages.",
      "Maintaining brand consistency throughout the design.",
    ],
  },
  {
    title: "Back End Development Development",
    description: [
      "Integration of user-facing elements developed by a front-end developers with server side logic",
      "Building reusable code and libraries for future use",
      "Building Restful and GraphQl apis",
      "Optimization of the application for maximum speed and scalability",
      "Implementation of security and data protection",
      "Design and implementation of data storage solutions",
    ],
  },
  // {
  //   title: "Back end Development",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  // },
];

const Services = () => {
  const serviceRef = useRef(null);
  return (
    <div ref={serviceRef} className="grid grid-cols-2 gap-4">
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
