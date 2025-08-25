import React from "react";

export interface ServiceProps {
  title: string;
  description: Array<string> | string;
}

const Service = ({ title, description }: ServiceProps) => {
  return (
    <div className="bg-[#2D2D38] h-full flex flex-col p-5 sm:p-6 md:p-8 text-sm sm:text-[0.9rem] text-muted rounded-md border border-transparent hover:border-white/10 transition-colors duration-300">
      <h1 className="font-bold text-base sm:text-md capitalize mb-3 sm:mb-4 text-white">
        {title}
      </h1>
      <div className="flex-1">
        <ul
          className={`${
            Array.isArray(description) ? "pl-4" : "pl-0"
          } space-y-2`}
        >
          {Array.isArray(description) ? (
            description.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))
          ) : (
            <div className="leading-relaxed">{description}</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Service;
