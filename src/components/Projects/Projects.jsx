import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./Projects.less";

const Projects = () => {
  return (
    <div className="secondRowContainer">
      <ParallaxLayer
        offset={1}
        factor="2"
        speed={0.8}
        className="secondRowLayer"
      />

      <ParallaxLayer offset={1.2} speed={0.6}>
        <h1 className="secondRowTitle">Projects</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={1.4} speed={1.2}>
        <div className="imageProject1Container">
          <img className="imageProject1" src="./hotel.jpg" alt="not found" />
          <div className="imageProjectText">
            <h1>HENRY HOTEL</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.999} speed={1.3}>
        <div className="imageProject2Container">
          <img className="imageProject2" src="./music.jpg" alt="not found" />
          <div className="imageProjectText">
            <h1>MusicAPI</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.999} speed={1.4}>
        <div className="imageProject3Container">
          <img className="imageProject3" src="./games.jpg" alt="not found" />
          <div className="imageProjectText">
            <h1>GameLibrary</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default Projects;
