import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BsArrowDown } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import { Modal, Button } from 'antd';


import './App.less';

function App() {

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
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }}>


        {/* --------------------------------------------------- FIRST PAGE --------------------------------------------------- */}

        <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className="BGiMAGE">

            <ParallaxLayer offset={0} speed={0.7}>
              <div className="homeContainer">
                <div className="homeMenus">
                  <h2 style={{color: "rgb(51, 228, 235)"}}>menu</h2>
                  <h1>About.</h1>
                  <h1>Projects.</h1>
                  <h1>Contact.</h1>
                </div>

                <div className="homContainerName">
                  <div>
                    GABRIEL ESTEBAN
                  </div>
                  <div >
                    PATIÑO LINAREZ
                  </div>
                  <div style={{ fontSize: "21px" }}>
                    FULLSTACK DEVELOPER
                  </div>
                </div>
                <div className="homeContainerRedes">
                  <div>
                    Gabriel ©
                  </div>
                  <div>
                    <ImLinkedin />
                    <GoMarkGithub />
                  </div>
                </div>

              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.94} speed={0.1}>
              <BsArrowDown className="homeContainerScrollDownIcon" />
            </ParallaxLayer>

          </div>

        </ParallaxLayer>


        {/* --------------------------------------------------- SECOND PAGE --------------------------------------------------- */}  <ParallaxLayer offset={1} speed={1.5} style={{ backgroundColor: 'grey' }} />

        <ParallaxLayer offset={1.1} speed={0.2}>
          <div>

            <div style={{ fontSize: "50px", color: "white" }}>
              SOME PROJECTS
                <ParallaxLayer offset={0.6} speed={0.4}>
                <div className="secondPage">
                  <Button type="primary" onClick={showModal}>
                    Open Modal
                  </Button>
                </div>

                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </ParallaxLayer>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
