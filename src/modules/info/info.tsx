import React from "react";
import { Box } from "@mui/material";

import galaxy from "../../assets/images/galaxy.gif";
import galaxy1 from "../../assets/images/galaxy1.gif";
import "./info.scss";

export default function Info(): JSX.Element {
  return (
    <React.Fragment>
      <Box className="Info">
        <Box className="left">
          <Box className="images center-item">
            <img src={galaxy} alt="Galaxy" />
          </Box>
        </Box>
        <Box className="right center-item">
          <Box className="container">
            <Box className="title">PROFESSIONAL SUMMARY</Box>
            <Box className="description">
              Talented Software Development leader experienced in producing and
              updating systems. Optimizes structures and processes to accomplish
              customer targets and promote company loyalty. Expert in diverse
              programming languages. Bringing more than 3 years of experience
              leading website design projects, including gathering user
              requirements, producing code, creating mockups and enhancing
              designs. Focused on creating clean, robust code with exceptional
              security. Achieves compatibility targets while meeting and
              exceeding customer demands. Hardworking and passionate job seeker
              with strong organizational skills eager to secure entry- level
              position in environment. Ready to help team achieve company goals.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="Info2">
        <Box className="left-side">
          <Box className="container">
            <Box className="title">ABOUT ME</Box>
            <Box className="description ">
              I was born on 3 January 1999. In 2016-2017 I was end Diploma at
              Hun Sen Oreang Ov High School. I start GED at ITC for one year
              then I chnage to KIT. I have done with Django And React. I have
              won the CS CUP Cambodia 2021 and 2022(Computer Science CUP) by getting rank 1st.
            </Box>
          </Box>
        </Box>
        <Box className="right-side">
            <Box className="images">
                <img src={galaxy1} alt="Galaxy" />
            </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
