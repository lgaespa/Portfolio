import React from "react";
import { Button } from "antd";
import { ParallaxLayer } from "@react-spring/parallax";

const Contact = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={2} className="thirdRowContainer" />

      <ParallaxLayer offset={2} speed={0.8}>
        <h1 className="thirdRowTitle">Contact</h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1.3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div className="thirdRow">
          <div className="cardAboutMe">
            <img className="imagenProfile" src="profile.jpg" alt="not found" />
            GABRIEL
          </div>
          <div className="TextAboutMe">
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj doaidjai
            adjodjaodjaodjaisodjioad adihasoidjsaidjdiosj adihasoidjsaidjdiosj
            doaidjai
            <Button className="buttonTextAboutMe" type="primary">
              Contact
            </Button>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
