import React, { useState, Fragment, useRef } from "react";
import { projects } from ".";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const AllProjectsModal = () => {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const activeProject =
    typeof activeIdx === "number" ? projects[activeIdx] : null;

  const handleOpen = (idx: number) => {
    setActiveIdx(idx);
    setOpen(true);
  };

  return (
    <div id="projects" className="relative projects-swiper-wrapper">
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-20 blur-2xl bg-black/60 rounded-full pointer-events-none" />
      {/* Navigation Arrows */}
      <button
        aria-label="Previous project"
        className="projects-nav-btn projects-prev hidden md:flex"
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
        aria-label="Next project"
        className="projects-nav-btn projects-next hidden md:flex"
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
        effect="coverflow"
        centeredSlides
        slidesPerView={"auto"}
        loop
        grabCursor
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3400,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, el: paginationRef.current }}
        navigation={{ prevEl: ".projects-prev", nextEl: ".projects-next" }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="pb-6 projects-swiper"
        onBeforeInit={(swiper: any) => {
          // @ts-ignore attach external pagination element before init
          swiper.params.pagination.el = paginationRef.current;
        }}
        onSwiper={(swiper: any) => {
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
        {projects.map(({ image, title }, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[78%] sm:!w-[460px] max-w-[520px] !h-auto px-2"
          >
            <button
              onClick={() => handleOpen(idx)}
              className="relative h-[22rem] sm:h-[24rem] w-full bg-[#1f1f27] rounded-xl overflow-hidden shadow-xl shadow-black/40 group flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-[#FBC108]/70"
              aria-label={`View details for ${title}`}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-[#14141b]">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  priority={idx < 3}
                  className="transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs tracking-wide px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {title}
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* External pagination below slider */}
      <div
        ref={paginationRef}
        className="projects-pagination flex items-center justify-center mt-6"
      />

      {/* Detail Modal */}
      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl bg-[#1E1E27] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                  {activeProject && (
                    <div className="flex flex-col">
                      <div className="relative w-full h-64 bg-black">
                        <Image
                          src={activeProject.image}
                          alt={activeProject.title}
                          layout="fill"
                          objectFit="contain"
                          className="p-4"
                        />
                      </div>
                      <div className="p-6 flex flex-col gap-4 text-sm text-muted">
                        <Dialog.Title className="text-white font-semibold text-xl">
                          {activeProject.title}
                        </Dialog.Title>
                        <p className="leading-relaxed text-[0.85rem] whitespace-pre-line">
                          {activeProject.desc}
                        </p>
                        <div className="flex gap-4 flex-wrap items-center mt-2">
                          <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 bg-[#FBC108] text-black font-semibold uppercase text-[0.65rem] tracking-wide px-4 py-2 rounded-full shadow hover:brightness-110 transition"
                          >
                            <span>Visit Site</span>
                            <ChevronRightIcon style={{ fontSize: "1rem" }} />
                          </a>
                          <button
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-full border border-white/20 text-white text-[0.65rem] uppercase tracking-wide hover:bg-white/10 transition"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AllProjectsModal;
