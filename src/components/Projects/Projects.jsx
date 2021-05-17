import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Modal, Button } from "antd";
import "./Projects.less";

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <img
            onClick={showModal}
            className="imageProject1"
            src="./hotel.jpg"
            alt="not found"
          />
          <div className="imageProjectText">
            <h1>HENRY HOTEL</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.999} speed={1.3}>
        <div className="imageProject2Container">
          <img
            onClick={showModal}
            className="imageProject2"
            src="./music.jpg"
            alt="not found"
          />
          <div className="imageProjectText">
            <h1>MusicAPI</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.4}>
        <div className="imageProject3Container">
          <img
            onClick={showModal}
            className="imageProject3"
            src="./games.jpg"
            alt="not found"
          />
          <div className="imageProjectText">
            <h1>GameLibrary</h1>
            <p>BIENIDI OHSDOIAJ AIOJDO AIJDOIAHOD AH</p>
          </div>
        </div>
      </ParallaxLayer>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Projects;
