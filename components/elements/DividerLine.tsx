import React from "react";
import { twMerge } from "tailwind-merge";

const DividerLine = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("h-[1px] w-full bg-[gray] my-6", className)}></div>
  );
};

export default DividerLine;
