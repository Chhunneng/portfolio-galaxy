import React from "react";

import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import portfolio from "../../assets/images/portfolio.png";

import "./header.scss";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header>
      <Box onClick={() => window.location.reload()} className="logo">
        <Typewriter
          options={{
            strings: ["Hello, I'm", "Chhunneng"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="https://www.facebook.com/chhunneng.chrea"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook Profile" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/chreachanchhunneng"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Instagram Profile" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chrea-chanchhunneng-11a833168"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin Profile" />
            </a>
          </li>
          <li>
            <Link to="/my-cv">
              <img src={portfolio} alt="My CV" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
