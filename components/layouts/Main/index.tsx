import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[80vh] overflow-auto  dark:bg-dark">{children}</div>
  );
};

export default Main;
