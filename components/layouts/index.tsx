import React, { FC, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`flex flex-col h-screen ${
        darkMode ? "dark text-white bg-dark" : ""
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>{children}</Main>
    </div>
  );
};

export default LayOut;
