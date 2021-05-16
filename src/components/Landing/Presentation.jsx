import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { GoMarkGithub } from "react-icons/go";
import { ParallaxLayer } from '@react-spring/parallax'


import "./Presentation.less"

const Presentation = () => {
    return (
        <ParallaxLayer offset={0} speed={0.7}>

            <div className="homeContainer">
                <div className="logoNavContainer">
                    <img className="logoNav" src="/logoGP2.png" alt="not found" />
                </div>

                <div className="homeMenus">
                    <h2 style={{ color: "rgb(51, 228, 235)", marginRight: "20px" }}>-menu</h2>
                    <h1>Projects.</h1>
                    <h1>Contact.</h1>
                </div>

                <div className="homeContainerName">
                    <div>
                        GABRIEL ESTEBAN
                </div>
                    <div >
                        PATIÑO LINAREZ
                </div>
                    <div className="homeRoleName">
                        FULLSTACK DEVELOPER
                </div>
                </div>
                <div className="homeContainerRedes">
                    <div>
                        gabrielesteb4n@gmail.com
                </div>
                    <div>
                        <ImLinkedin />
                        <GoMarkGithub />
                    </div>
                </div>

            </div>
        </ParallaxLayer>

    )
}

export default Presentation
