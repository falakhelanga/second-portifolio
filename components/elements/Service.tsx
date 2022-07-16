import React from "react";

interface ServiceProps {
  title: string;
  description: Array<string>;
}

const Service = ({ title, description }: ServiceProps) => {
  return (
    <div className="bg-[#2D2D38] p-8 text-sm text-muted">
      <h1 className="font-bold text-md capitalize mb-4 text-white ">{title}</h1>
      <ul className="pl-4">
        {description.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
