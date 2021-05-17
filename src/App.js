import React from 'react'
import { Parallax } from '@react-spring/parallax'
import Presentation from "./components/Landing/Presentation";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.less';


function App() {

    return (
        <div className="App">
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <Presentation />
                <Projects />
                <Contact />
            </Parallax>
        </div>
    );
}

export default App;
