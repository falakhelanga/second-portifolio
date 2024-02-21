import React from "react";

export interface ServiceProps {
  title: string;
  description: Array<string> | string;
}

const Service = ({ title, description }: ServiceProps) => {
  return (
    <div className="bg-[#2D2D38] p-8 text-sm text-muted">
      <h1 className="font-bold text-md capitalize mb-4 text-white ">{title}</h1>
      <ul className={`${Array.isArray(description) ? "pl-4" : "pl-0"}`}>
        {Array.isArray(description) ? (
          description.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))
        ) : (
          <div>{description}</div>
        )}
      </ul>
    </div>
  );
};

export default Service;
