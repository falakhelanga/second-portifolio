import { CircularProgress, LinearProgress, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import DividerLine from "../../elements/DividerLine";
import CheckIcon from "@mui/icons-material/Check";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const personalDetails = {
  Country: "South Africa",
  City: "Johannesburg",
  Email: "sivelafalakhe@outlook.com",
};

const languages = {
  zulu: 100,
  english: 100,

  xhosa: 75,
};

const programmingLanguages = {
  React: 98,
  Nextjs: 98,
  "React Native": 90,
  Flutter: 95,
  "ASP.net": 85,
  Django: 85,
  Express: 85,
  Angular: 85,
};

const otherSkills = [
  `MongoDb, DynamoDb ,Redis`,
  `Postgresql, SQL Server`,
  `AWS,Google Cloud,Docker, kubernetes`,
  `React testing, Jest`,
  `Tailwind css, Bootstrap, Material UI`,
  `Git, Github, Bitbucket, Gitlab`,
  `Strapi, wordpress`,
  `Firebase`,
];

const swipperSliderStyles =
  "aspect-square !rounded-full bg-white flex items-center justify-center ";
const SideBarContent = () => {
  return (
    <div className="px-6 py-4 overflow-y-auto w-full  h-full sidebar-content">
      {/* personal details*/}
      <div>
        {Object.keys(personalDetails).map((key) => (
          <div key={key}>
            <div className="flex justify-between text-sm mt-1">
              <span className="font-bold">{key}:</span>
              <span className="text-muted">
                {personalDetails[key as keyof typeof personalDetails]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <DividerLine className="my-3" />
      </div>

      {/* languages */}

      <div className="  w-full relative  overflow-hidden ">
        <Swiper
          slidesPerView={3.5}
          speed={8000}
          loop={true}
          className="!relative  h-full"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          spaceBetween={18}
          allowTouchMove={false}
          cssMode={false}
          onSwiper={(swiper: any) => {
            swiper.el.style.setProperty(
              "--swiper-wrapper-transition-timing-function",
              "linear"
            );
          }}
        >
          <SwiperSlide
            className={swipperSliderStyles}
            style={{
              backgroundImage: "url(/images/python_logo.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center",
            }}
          />
          <SwiperSlide
            className={swipperSliderStyles}
            style={{
              backgroundImage: "url(/images/typescript.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "center",
            }}
          />
          <SwiperSlide
            className={swipperSliderStyles}
            style={{
              backgroundImage: "url(/images/Csharp_Logo.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
          <SwiperSlide
            className={swipperSliderStyles}
            style={{
              backgroundImage: "url(/images/Dart_logo.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        </Swiper>
      </div>

      <div className="mb-8">
        <DividerLine className="my-3" />
      </div>

      {/* programming languages */}
      <div>
        <h3 className="font-bold mb-3">Frameworks</h3>
        {Object.keys(programmingLanguages).map((key) => (
          <div key={key} className="mb-4">
            <Box sx={{ width: "100%" }}>
              <span className=" capitalize font-bold text-sm">{key}</span>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    className=""
                    style={{}}
                    value={
                      programmingLanguages[
                        key as keyof typeof programmingLanguages
                      ]
                    }
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography
                    className="text-muted "
                    variant="body2"
                    // color="text.secondary"
                  >{`${Math.round(
                    programmingLanguages[
                      key as keyof typeof programmingLanguages
                    ]
                  )}%`}</Typography>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <DividerLine />
      </div>
      {/* other skills */}
      <div className="font-bold mb-4">DevOps & Utilities</div>
      <div>
        {otherSkills.map((skill) => (
          <div key={skill} className="flex items-center mb-1">
            <CheckIcon
              style={{ fontSize: "0.8rem" }}
              className="text-[#FBC108]  "
            />
            <span className="text-gray-500 text-sm ml-1 font-bold">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarContent;
