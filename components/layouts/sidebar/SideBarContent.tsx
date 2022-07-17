import { CircularProgress, LinearProgress, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import DividerLine from "../../elements/DividerLine";
import CheckIcon from "@mui/icons-material/Check";

const personalDetails = {
  country: "South Africa",
  city: "Randburg",
  email: "sivelafj@gmail.com",
};

const languages = {
  zulu: 100,
  english: 80,

  xhosa: 75,
};

const programmingLanguages = {
  javascript: 95,

  typescript: 90,

  nodejs: 90,
  python: 40,
};

const otherSkills = [
  `Reactjs, Nextjs, React Native`,
  `Express, Django`,
  `GraphQL Apis, Restful Apis`,
  `React testing, Jest`,
  `Tailwind css, Bootstrap, Material UI`,
  `GraphQL, RestApi, Express`,
  `Git, Github, Bitbucket`,
  `MongoDb, AWS, Google Cloud`,
  `strapi, wordpress`,
  `Firebase`,
];

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
      <div className="my-8">
        <DividerLine />
      </div>

      {/* languages */}

      <div className="flex justify-between">
        {Object.keys(languages).map((key) => (
          <div key={key}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  // className="text-[#FBC108]  "
                  variant="determinate"
                  value={languages[key as keyof typeof languages]}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="text-muted text-xs"
                    variant="caption"
                    component="div"
                    // color="text.secondary"
                  >{`${Math.round(
                    languages[key as keyof typeof languages]
                  )}%`}</Typography>
                </Box>
              </Box>
              <span className="text-sm capitalize mt-2 font-bold">{key}</span>
            </Box>
          </div>
        ))}
      </div>
      <div className="my-8">
        <DividerLine />
      </div>

      {/* programming languages */}
      <div>
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
      <div className="my-8">
        <DividerLine />
      </div>
      {/* other skills */}
      <div>
        {otherSkills.map((skill) => (
          <div key={skill} className="flex items-center mb-1">
            <CheckIcon className="text-[#FBC108] text-sm " />
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
