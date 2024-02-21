import React, { useState, useContext, createContext, Context } from "react";

interface NavType {
  handleToggleNav: () => void;
  isNavOpen: boolean;
}

const NavContext: Context<NavType | null> = createContext<NavType | null>(null);

const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setOpenNav] = useState(false);
  const handleToggleNav = () => {
    setOpenNav((currState) => !currState);
  };

  return (
    <NavContext.Provider value={{ isNavOpen, handleToggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

export const useNav = () => useContext(NavContext) as NavType;
