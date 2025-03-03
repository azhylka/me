import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-2xl font-bold">Welcome to My Research Page</h1>
    <p className="mt-2">Explore my research, projects, and interests.</p>
  </motion.div>
);

const Bio = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-2xl font-bold">About Me</h1>
    <p className="mt-2">[Add your biography here]</p>
  </motion.div>
);

const Interests = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-2xl font-bold">Research Interests</h1>
    <p className="mt-2">[Add research interests here]</p>
  </motion.div>
);

const Projects = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-2xl font-bold">Projects</h1>
    <p className="mt-2">[Scrape and display figures, abstracts here]</p>
  </motion.div>
);

const Publications = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-2xl font-bold">Publications</h1>
    <p className="mt-2">[Fetch publications via OCRID and upload TeX files]</p>
  </motion.div>
);

const App = () => (
  <Router>
    <div className="p-4">
      <nav className="mb-4">
        <Link className="mr-4" to="/">Home</Link>
        <Link className="mr-4" to="/bio">Bio</Link>
        <Link className="mr-4" to="/interests">Interests</Link>
        <Link className="mr-4" to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  </Router>
);

export default App;

