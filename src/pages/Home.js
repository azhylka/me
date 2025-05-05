import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import az from '../styles/pics/az.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="background-image"></div>
            <header className="home-header">
                <div className="header-content">
                    <img src={az} alt="Andrey Zhylka" className="profile-photo" />
                    <div>
                        <h1>Andrey Zhylka</h1>
                        <p>Postdoc at UMC Utrecht</p>
                        <p>a dot i dot zhylka at umcutrecht dot nl</p>
                    </div>
                </div>
            </header>
            <section className="home-bio">
                <div className="bio-content">
                    <div className="bio-text">
                        <h2>About Me</h2>
                        <p>
                            I am Andrey Zhylka, a postdoc at UMC Utrecht. 
                            I received my PhD from Eindhoven University of Technology in 2023 for the work on fibre tractography for neurosurgery planning (<Link to="https://research.tue.nl/en/publications/diffusion-mri-tractography-branched-out">"Diffusion MRI tractography branched out"</Link>).
                            <br/>
                            My main focus is on application of Diffusion MRI, in particular tractography for neurosurgery planning and intraoperative navigation.
                            Other topics I am working on include exploring clinical applications of Diffusion MRI for biomarker discovery as well as analyzing Diffusion MRI data in combination with functional modalities (e.g., TMS).
                            If you are instersted in collaborating, please, feel free to send me a message.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

