import React from "react";
import { useNav } from "../../../context/nav";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { isNavOpen } = useNav();
  return (
    <div
      className={` 2xl:flex-[1.3] lg:flex-[1.4] h-full w-full  flex ${
        isNavOpen ? "overflow-hidden" : "overflow-auto"
      } main relative`}
    >
      <div className="w-full ">{children}</div>

      {/* <div
        className={`bg-[#201F2A] right-0 top-0 bottom-0 absolute ${
          isNavOpen ? "w-[30%]" : "w-0"
        } transition-all h-full duration-500 ease-out	`}
      >
        <div className="bg-[rgb(37,36,49)] w-full h-[6rem]"></div>
        <div className="flex flex-col justify-center h-full items-center">
          <div className="text-start flex flex-col">
            {menuItems.map((item) => (
              <div className=" text-muted" key={item.title}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
