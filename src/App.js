import React from "react";
import { HashRouter } from "react-router-dom";
import Publications from './pages/Publications';
import AppRouter from './AppRouter';
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Home />
            <Publications />
        </div>
    );
}

export default App;

