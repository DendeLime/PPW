import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./routes/Home";
import About from "./routes/About"
import Projects from "./routes/Projects"
import Resume from "./routes/Resume"
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <BrowserRouter>
    <Header/>
        <Routes className="content">
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
        </Routes>
        <section className="footer">
            <Footer />
        </section>
    
    </BrowserRouter>

);
