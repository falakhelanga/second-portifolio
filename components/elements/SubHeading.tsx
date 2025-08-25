import React, { ReactNode } from "react";

interface SubHeadingProps {
  className?: string;
  rest?: any;
  children: ReactNode;
}

const SubHeading = ({ className, children, ...rest }: SubHeadingProps) => {
  return (
    <h1 className={`font-bold  text-xl ${className}`} {...rest}>
      {children}
    </h1>
  );
};

export default SubHeading;
