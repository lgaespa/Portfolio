import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Modal } from "antd";
import HotelDetails from "../Details/HotelDetails";
import MusicDetails from "../Details/MusicDetails";
import GameDetails from "../Details/GameDetails";
import "./Projects.less";

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const showModal2 = () => {
    setIsModalVisible2(!isModalVisible2);
  };
  const showModal3 = () => {
    setIsModalVisible3(!isModalVisible3);
  };

  return (
    <div className="secondRowContainer">
      <ParallaxLayer
        offset={1}
        factor={2}
        speed={0.8}
        className="secondRowLayer"
      />

      <ParallaxLayer offset={1.2} speed={0.6}>
        <h1 className="secondRowTitle">Projectos</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={1.4} speed={1.2}>
        <div className="imageProject1Container">
          <img
            onClick={showModal}
            className="imageProject1"
            src="./hotel.jpg"
            alt="not found"
          />
          <div className="imageDetails">Click the image for more details</div>
          <div className="imageProjectText">
            <h1>HENRY HOTEL</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.999} speed={1.3}>
        <div className="imageProject2Container">
          <img
            onClick={showModal2}
            className="imageProject2"
            src="./music.jpg"
            alt="not found"
          />
          <div className="imageDetails">Click the image for more details</div>
          <div className="imageProjectText">
            <h1>MusicAPI</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1.4}>
        <div className="imageProject3Container">
          <img
            onClick={showModal3}
            className="imageProject3"
            src="./games.jpg"
            alt="not found"
          />
          <div className="imageDetails">Click the image for more details</div>
          <div className="imageProjectText">
            <h1>GameLibrary</h1>
          </div>
        </div>
      </ParallaxLayer>

      <Modal
        width={660}
        visible={isModalVisible}
        onCancel={showModal}
        footer={null}
      >
        <HotelDetails />
      </Modal>
      <Modal
        width={660}
        visible={isModalVisible2}
        onCancel={showModal2}
        footer={null}
      >
        <MusicDetails />
      </Modal>
      <Modal
        width={660}
        visible={isModalVisible3}
        onCancel={showModal3}
        footer={null}
      >
        <GameDetails />
      </Modal>
    </div>
  );
};

export default Projects;
