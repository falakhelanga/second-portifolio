import React from "react";
import Service from "../../elements/Service";

const services = [
  {
    title: "Web Application Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
  {
    title: "Back end Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
