import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BsArrowDown } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";


import './App.less';

function App() {


  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }}>

        <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className="BGiMAGE">

            <ParallaxLayer offset={0} speed={0.4}>
              <div className="homeContainer">
                <div>
                  nav
                </div>

                <div className="homContainerName">
                  <div>
                    GABRIEL ESTEBAN
                  </div>
                  <div >
                    PATIÑO LINAREZ
                  </div>
                  <div style={{fontSize:"21px"}}>
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

            <ParallaxLayer offset={0.95} speed={0.1}>
              <BsArrowDown className="homeContainerScrollDownIcon" />
            </ParallaxLayer>

          </div>

        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.2}>
          <div>

            <div style={{ fontSize: "50px" }}>
              SOME PROJECTS
                <ParallaxLayer offset={0.6} speed={0.4}>
                <div className="secondPage">
                  HOLA
                 </div>
              </ParallaxLayer>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
