import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import az from '../styles/pics/az.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="background-image"></div>
            <header className="home-header">
                <h1>Andrey Zhylka</h1>
                <p>Postdoc at UMC Utrecht</p>
            </header>
            <section className="home-bio">
                <div className="bio-content">
                    <img src={az} alt="Andrey Zhylka" className="profile-photo" />
                    <div className="bio-text">
                        <h2>About Me</h2>
                        <p>
                            I am Andrey Zhylka, a postdoc at UMC Utrecht. My main research focus is on Diffusion MRI analysis.
                            More specifically, I have been working on fibre tractography for neurosurgery planning and other applications in clinical cases.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

