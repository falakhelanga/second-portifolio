import React from "react";

interface ServiceProps {
  title: string;
  description: string;
}

const Service = ({ title, description }: ServiceProps) => {
  return (
    <div className="bg-[#2D2D38] p-8">
      <h1 className="font-bold text-md capitalize mb-4">{title}</h1>
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default Service;
