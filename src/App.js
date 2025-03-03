import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
}

export default App;

