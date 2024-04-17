import React, { useRef } from "react";
import Project from "../../elements/Project";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export const projects = [
  {
    title: "Puula",
    image: "/images/puula.png",
    desc: "Puula is an earned wages access system that allows employees to securely withdraw a portion of their earned but unpaid wages before payday, helping them avoid costly loans or fees.",
    link: "https://puula-frontend.vercel.app/sign-in",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "KEGTracker",
    image: "/images/KT.png",
    desc: "KEGTracker is a system that enables users to fill and dispatch kegs to clients, while also providing reporting functionalities.",
    link: "https://staging.kegtracker.co.za/dashboard",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "Hot Octopus",
    image: "/images/ho.png",
    desc: "HotOctopus is an e-commerce website offering a variety of sex toys and intimacy products. The platform provides customers with a discreet and convenient way to browse and purchase these items online.",
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
    title: "GYNAGuard",
    image: "/images/gynaguard.png",
    desc: "GynaGuard is a comprehensive line of feminine hygiene products designed to cleanse, relieve, and provide ongoing care for women's intimate areas. The product range includes cleansers, wipes, creams, and other items focused on maintaining feminine health and wellness.",
    link: "https://www.gynaguard.co.za/?page=comfort",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "BIC Colour Tomorrow",
    image: "/images/bic.png",
    desc: "BIC is a project that encompasses two main product lines - stationery items such as pens and pencils, as well as gas-powered lighting solutions that provide portable and reliable illumination.",
    link: "https://mea.bic.com/en-za/stationery/colour-tomorrow",
    height: "row-span-1 min-h-[20rem]",
  },

  {
    title: "Fuel insights",
    image: "/images/fms.png",
    desc: "Fuel Insight is a project that provides fuel management solutions for [industry/sector]. The platform tracks and analyzes fuel consumption data to help users optimize their fuel usage and costs",
    link: "#",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "Teach Me Fluids",
    image: "/images/tmf.png",
    desc: "Teach Me Fluids is a project that provides educational resources and tools for medical doctors. The focus is on helping doctors learn about fluid management and related clinical practices.",
    link: "https://apps.apple.com/us/app/teach-me-fluid/id6464385259",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "KEGTracker App",
    image: "/images/KT-APP.png",
    desc: "KEGTracker is a system that enables users to fill and dispatch kegs to clients, while also providing reporting functionalities.",
    link: "https://play.google.com/store/apps/details?id=com.bigbrave.kegtracker&pli=1",
    height: "row-span-1 min-h-[20rem]",
  },
  {
    title: "Darlington",
    image: "/images/darlington.png",
    desc: "This application features two distinct experiences that are connected to strategically placed QR codes throughout the library, inviting visitors to engage with the following unique AR elements",
    link: "https://darlington.vercel.app/reveal",
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
      className="mySwiper -mt-[5rem]"
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={project.title} className="relative ">
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
