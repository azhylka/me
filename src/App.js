import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Publications from "./pages/Publications";
import Home from "./pages/Home";
import FaceTract from "./pages/FaceTract";
import './styles/App.css';
import me from './styles/pics/me.png';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <div className="background-image"></div>
                <nav>
                    <ul>
                        <li><a href="#/">Home</a></li>
                        <li><a href="#/publications">Publications</a></li>
                        <li><a href="#/facetract">FaceTract</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/facetract" element={<FaceTract />} />
                </Routes>
                <img src={me} alt="Me" className="corner-image" />
            </div>
        </HashRouter>
    );
}

export default App;

