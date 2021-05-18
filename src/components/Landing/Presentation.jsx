import React from "react";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import { Button } from "antd";
import { ParallaxLayer } from "@react-spring/parallax";
import { BsArrowDown } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import "./Presentation.less";

const Presentation = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="BGiMAGE">
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="homeContainer">
            <div className="logoNavContainer">
              <img className="logoNav" src="/logoGP2.png" alt="not found" />

              <div className="presentationButtonsContainer">
                <Button
                  type="text"
                  href={"https://linkedin.com/in/gabrielEstebanP"}
                  target="_blank"
                >
                  <ImLinkedin className="presentationButtons" />
                </Button>
                <Button
                  type="text"
                  href={"https://github.com/lgaespa"}
                  target="_blank"
                >
                  <GoMarkGithub className="presentationButtons" />
                </Button>

                <Button href="mailto:gabrielesteb4n@gmail.com" type="text">
                  <AiFillMail className="presentationButtons" />
                </Button>
              </div>
            </div>

            <div className="homeMenus"></div>

            <div className="homeContainerName">
              <div>GABRIEL ESTEBAN</div>
              <div>PATIÑO LINAREZ</div>
              <div className="homeRoleName">FULLSTACK DEVELOPER</div>
            </div>
            <div className="homeContainerRedes">
              <div className="redesMail">gabrielesteb4n@gmail.com</div>
              <div className="redesLogos"></div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.1}>
          <div className="homeContainerScrollText">
            <div>Projectos.</div>
            <div>Contacto.</div>
            <BsArrowDown className="homeContainerScrollDownIcon" />
          </div>
        </ParallaxLayer>
      </div>
    </ParallaxLayer>
  );
};

export default Presentation;
