import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import Service, { ServiceProps } from "../../elements/Service";
// Swiper for mobile slider view
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services: ServiceProps[] = [
  {
    title: "AI Agent Engineering",
    description:
      "Designing autonomous & tool-augmented agents (planning, tool routing, memory, evaluation loops) using LangChain, LangGraph & custom orchestrators.",
  },
  {
    title: "MCP Server Development",
    description:
      "Implementing Model Context Protocol servers to safely expose internal tools, data, and actions to AI assistants with permission & audit layers.",
  },
  {
    title: "LangChain & LangGraph Workflows",
    description:
      "Composable multi-step chains & graphs: retrieval, function calling, tool adapters, structured output parsing, evaluators, and monitoring integrations.",
  },
  {
    title: "Deep Research Agents",
    description:
      "Multi-phase research agents performing iterative querying, source ranking, synthesis & citation generation across APIs and unstructured corpora.",
  },
  {
    title: "RAG & Vector Pipelines",
    description:
      "End-to-end retrieval augmented generation: ingestion, chunking, embeddings, hybrid search, re-ranking, caching & latency optimization.",
  },
  {
    title: "Custom Software Development",
    description:
      "Transform your ideas into powerful, scalable, and user-friendly software solutions. From concept to deployment, I specialize in crafting bespoke software tailored to your unique requirements.",
  },
  {
    title: "Web Application Development",
    description:
      "Create a strong online presence with dynamic and responsive web applications. I design and develop web solutions that not only meet your current needs but also scale with your business as it grows.",
  },
  {
    title: "Mobile App Development",
    description:
      "Reach your audience on the go with custom mobile applications for iOS and Android. Whether it's a standalone app or integration with existing systems, I deliver intuitive and high-performance mobile solutions.",
  },
  {
    title: " API Development and Integration",
    description:
      "Build robust APIs to connect and streamline your software ecosystem. I specialize in designing APIs that enhance communication between different services, ensuring seamless integration and data flow.",
  },
  // {
  //   title: "Database Design and Optimization",
  //   description:
  //     "Organize and manage your data efficiently with expert database solutions. I design, implement, and optimize databases to ensure data integrity, performance, and scalability for your applications.",
  // },
  {
    title: "Code Review and Optimization",
    description:
      "Ensure the quality and efficiency of your codebase with thorough code reviews. I identify potential issues, optimize performance, and implement best practices to enhance the maintainability of your software.",
  },
  {
    title: "Maintenance and Support",
    description:
      "Ensure the longevity and smooth operation of your software with ongoing maintenance and support. I offer timely updates, bug fixes, and proactive monitoring to keep your applications running at peak performance.",
  },
  // {
  //   title: "Front End Development (Web And Mobile)",
  //   description: [
  //     "Building Mobile and Web interfaces.",
  //     "Determining the structure and design of web and mobile pages.",
  //     "Ensuring user experience determines design choices.",
  //     "Developing features to enhance the user experience.",
  //     "Striking a balance between functional and aesthetic design.",
  //     "Ensuring web design is optimized for smartphones.",
  //     "Building reusable code for future use.",
  //     "Optimizing web pages for maximum speed and scalability.",
  //     "Utilizing a variety of markup languages to write web pages.",
  //     "Maintaining brand consistency throughout the design.",
  //   ],
  // },
  // {
  //   title: "Back End Development Development",
  //   description: [
  //     "Integration of user-facing elements developed by a front-end developers with server side logic",
  //     "Building reusable code and libraries for future use",
  //     "Building Restful and GraphQl apis",
  //     "Optimization of the application for maximum speed and scalability",
  //     "Implementation of security and data protection",
  //     "Design and implementation of data storage solutions",
  //   ],
  // },
  // {
  //   title: "Back end Development",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
  // },
];

const Services = () => {
  const serviceRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [uniformHeight, setUniformHeight] = useState<number | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  // Use layout effect on client only to avoid SSR warning
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  // measure tallest card after mount & on resize
  useIsomorphicLayoutEffect(() => {
    const elements = cardRefs.current.filter(Boolean);
    if (!elements.length) return;
    let frame: number;
    const resizeObserver = new ResizeObserver(() => {
      frame && cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const heights = elements.map((el) => el.getBoundingClientRect().height);
        if (heights.length) {
          const max = Math.max(...heights);
          setUniformHeight(max);
        }
      });
    });
    elements.forEach((el) => resizeObserver.observe(el));
    // initial measurement
    const initial = () => {
      const heights = elements.map((el) => el.getBoundingClientRect().height);
      if (heights.length) setUniformHeight(Math.max(...heights));
    };
    // delay a tick for fonts/images
    const t = setTimeout(initial, 30);
    const handleResize = () => initial();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      frame && cancelAnimationFrame(frame);
    };
  }, []);

  // reset refs length (in case of data change)
  cardRefs.current = [];

  return (
    <div
      id="services"
      ref={serviceRef}
      className="w-full relative services-swiper-wrapper"
      style={{}}
    >
      {/* Navigation Arrows (reuse project styles) */}
      <button
        aria-label="Previous service"
        className="projects-nav-btn services-prev hidden md:flex z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        aria-label="Next service"
        className="projects-nav-btn services-next hidden md:flex z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        centeredSlides={false}
        loop
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, el: paginationRef.current }}
        navigation={{ prevEl: ".services-prev", nextEl: ".services-next" }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1400: { slidesPerView: 3, spaceBetween: 28 },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="pb-4 md:pb-8 services-swiper"
        onBeforeInit={(swiper: any) => {
          // attach external pagination element before init
          // @ts-ignore
          swiper.params.pagination.el = paginationRef.current;
        }}
        onSwiper={(swiper: any) => {
          // ensure pagination updates after mount
          setTimeout(() => {
            // @ts-ignore
            swiper.pagination?.init();
            // @ts-ignore
            swiper.pagination?.render();
            // @ts-ignore
            swiper.pagination?.update();
          }, 0);
        }}
      >
        {services.map((service, idx) => (
          <SwiperSlide
            key={service.title}
            className="!h-auto flex"
            style={
              uniformHeight
                ? { minHeight: uniformHeight, height: uniformHeight }
                : undefined
            }
          >
            <div
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="w-full h-full"
            >
              <Service
                title={service.title}
                description={service.description}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* External pagination container placed below slider */}
      <div
        ref={paginationRef}
        className="services-pagination flex items-center justify-center mt-5"
      />
    </div>
  );
};

export default Services;
