import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { BsArrowDown } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import React from 'react'
import './App.less';


function App() {



  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }}>


        {/* --------------------------------------------------- FIRST PAGE --------------------------------------------------- */}

        <ParallaxLayer offset={0} speed={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className="BGiMAGE">

            <ParallaxLayer offset={0} speed={0.7}>
              <div className="homeContainer">
                <div className="homeMenus">
                  <h2 style={{ color: "rgb(51, 228, 235)", marginRight: "20px" }}>-menu</h2>
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


        {/* --------------------------------------------------- SECOND PAGE --------------------------------------------------- */}
        <ParallaxLayer offset={1} speed={1} className="homeCardContainers" />

        <ParallaxLayer offset={1.1} speed={0.1}>
          <div>

            <div style={{ fontSize: "50px", color: "white" }}>
              <div className="containerRowProjectsTitle">
                <div style={{ width: "20%" }}>
                  SOME
               </div>
                <div className="containerProjectsMainTitle">
                  SOME PROJECTS
                </div>
                <div style={{ width: "20%" }}>
                  PROJECTS
                </div>
              </div>

              <ParallaxLayer offset={0.8} speed={0.7}>

                <ParallaxLayer offset={0.45} speed={0.3}>
                  <div>
                    <img className="imageProjects" src="/musicApi.png" alt="not found" />
                  </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.9999} speed={0.3}>
                  <div>
                    <img className="imageProjects2" src="/henryHotel.png" alt="not found" />
                  </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.3}>
                  <div>
                    <img className="imageProjects3" src="/videoGame.png" alt="not found" />
                  </div>
                </ParallaxLayer>


                <div className="container1st">

                  <div style={{ display: "flex", flexDirection: "column", height: "100%", color: "black", alignItems: "center" }}>
                    <div style={{ fontSize: "20px", width: "200px" }}>
                      PROJECTS
                    </div>

                    <div style={{ width: "1px", height: "200px", backgroundColor: "rgb(197, 197, 197)" }}></div>

                    <div style={{ fontSize: "20px", width: "200px" }}>
                      MUSIC API
                    </div>

                    <div style={{ width: "1px", height: "300px", backgroundColor: "rgb(197, 197, 197)" }}></div>

                    <div style={{ fontSize: "20px", width: "200px" }}>
                      HENRY HOTEL
                    </div>

                    <div style={{ width: "1px", height: "300px", backgroundColor: "rgb(197, 197, 197)" }}></div>

                    <div style={{ fontSize: "20px", width: "200px" }}>
                      VIDEOGAMES API
                    </div>
                  </div>

                </div>

              </ParallaxLayer>
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={2.5} speed={0.1}>
          <div>

            <div style={{ fontSize: "50px", color: "white" }}>
              <div style={{ border: "7px solid rgb(55, 55, 63)", width: "480px", marginLeft: "35%", fontSize: "55px", fontWeight: "700" }}>
                SOME PROJECTS
              </div>
              <ParallaxLayer offset={0.8} speed={0.7}>
                <div className="container1st">

                  <div>

                  </div>
                </div>

              </ParallaxLayer>
            </div>
          </div>
        </ParallaxLayer> */}


        {/* --------------------------------------------------- THIRD PAGE --------------------------------------------------- */}


      </Parallax>

    </div>
  );
}

export default App;
