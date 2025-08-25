import React, { FC, useState, useEffect } from "react";
import Nav from "../sections/nav";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import SideBar from "./sidebar";
import { useNav } from "../../context/nav";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const { isNavOpen, handleToggleNav } = useNav();

  // lock body scroll when mobile sidebar open
  useEffect(() => {
    if (isNavOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavOpen]);

  return (
    <div className="mx-auto flex justify-center w-full md:w-screen items-start md:items-center min-h-screen md:h-screen text-white bg-[#191923] overflow-hidden">
      <div className="w-full md:w-[98%] 2xl:w-[90%] min-h-screen md:h-[98vh] flex flex-col md:flex-row overflow-hidden relative">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-4 sticky top-0 z-30 bg-[#191923]/90 backdrop-blur-sm border-b border-white/5">
          <div className="font-bold tracking-wide">Falakhe Sivela</div>
          <button
            onClick={handleToggleNav}
            className="p-2 rounded-md border border-white/10 active:scale-95"
            aria-label="Open navigation"
            aria-expanded={isNavOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* Mobile off-canvas sidebar */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            isNavOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } bg-black/60 backdrop-blur-sm`}
          onClick={handleToggleNav}
          aria-hidden={!isNavOpen}
        />
        <aside
          className={`md:hidden fixed left-0 top-0 bottom-0 z-50 w-[82%] max-w-[320px] bg-[#1f1f27] shadow-2xl shadow-black/50 border-r border-white/10 transform transition-transform duration-300 ease-out flex flex-col ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Sidebar"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <span className="font-semibold tracking-wide text-sm">Profile</span>
            <button
              onClick={handleToggleNav}
              aria-label="Close sidebar"
              className="p-2 rounded-md border border-white/10 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto flex-1 sidebar-content">
            {/* Reuse existing sidebar sections */}
            <SideBar />
          </div>
        </aside>
        {/* Desktop structure: sidebar + main + menu horizontally */}
        <div className="hidden md:flex md:flex-row w-full h-full overflow-hidden">
          <SideBar />
          <Main>{children}</Main>
          <Menu />
        </div>
        {/* Mobile: only main content (stacked) */}
        <div className="md:hidden w-full">
          <Main>{children}</Main>
        </div>
      </div>
    </div>
  );
};

export default LayOut;
