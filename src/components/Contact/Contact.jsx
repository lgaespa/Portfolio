import React from "react";
import { Button, Divider } from "antd";
import { ParallaxLayer } from "@react-spring/parallax";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import { AiFillMail } from "react-icons/ai";
import "./Contact.less";

const Contact = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={2} className="thirdRowContainer" />

      <ParallaxLayer offset={2} speed={0.7}>
        <h1 className="thirdRowTitle">Contacto</h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.1}
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
            <div className="cardAboutMeContent">
              <div>
                <h1>SKILLS</h1>
                <div className="cardAbouSkills">
                  <li>
                    <ul>Express</ul>
                    <ul>Sequelize</ul>
                    <ul>PostgreSQL</ul>
                    <ul>Typescript</ul>
                    <ul>Supabase</ul>
                    <ul>HTML/CSS</ul>
                  </li>
                  <li>
                    <ul>React JS</ul>
                    <ul>Redux</ul>
                    <ul>AntDesign</ul>
                    <ul>Less</ul>
                    <ul>Node JS</ul>
                    <ul>GIT</ul>
                  </li>
                </div>
              </div>
              <Divider type="vertical" className="dividerCardAboutMe"></Divider>
              <div>
                <h1>CONTACTO</h1>
                <div className="cardAboutContact">
                  <Button
                    style={{ marginBottom: "0.7rem", marginRight: "0.6rem" }}
                    className="contactButtons"
                    href={"https://linkedin.com/in/gabrielEstebanP"}
                    target="_blank"
                  >
                    LinkedIn
                    <ImLinkedin style={{ marginLeft: "0.6rem" }} />
                  </Button>
                  <Button
                    href={"https://github.com/lgaespa"}
                    target="_blank"
                    className="contactButtons"
                  >
                    Github
                    <GoMarkGithub style={{ marginLeft: "0.6rem" }} />
                  </Button>
                </div>
                <Button
                  href="mailto:gabrielesteb4n@gmail.com"
                  className="contactButtons"
                >
                  gabrielesteb4n@gmail.com{" "}
                  <AiFillMail style={{ marginLeft: "0.6rem" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
