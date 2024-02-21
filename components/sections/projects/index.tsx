import React, { useRef } from "react";
import Project from "../../elements/Project";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const projects = [
  {
    title: "The Box fashion",
    image: "/images/gynaguard.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://www.gynaguard.co.za/?page=comfort",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/puula.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://theboxfashion.co.za/",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/bic.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://mea.bic.com/en-za/stationery/colour-tomorrow",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/ho.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://www.hotoctopuss.com/",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/tbf.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://theboxfashion.co.za/",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/fms.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "#",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/tmf.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "#",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "The Box fashion",
    image: "/images/KT.png",
    desc: "Inspired to empower the everyday South African woman. The Box Fashion is the first and only local accessories membership service company that provides our clients with the latest fashion pieces and styling advice, all delivered to your doorstep in a box.",
    link: "https://staging.kegtracker.co.za/dashboard",
    height: "row-span-1 min-h-[20rem]",
  },
];

const Projects = () => {
  const projectRef = useRef(null);
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={1}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      speed={5000}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={project.title} className="relative">
          <Project height={project.height} idx={idx} project={project} />
        </SwiperSlide>
      ))}
      {/* <Project image="/images/tbf.png" />
      <Project image="/images/ap.png" />
      <Project image="/images/wbr.png" />
      <Project image="/images/KT.png" /> */}
    </Swiper>
  );
};

export default Projects;
