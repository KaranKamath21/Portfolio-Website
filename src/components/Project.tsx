import React from "react";
import cheatheon from '../assets/images/cheatheon.png';
import arc from '../assets/images/arc.png';
import medirisk from '../assets/images/medirisk.png';
import library from '../assets/images/library.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://cheatheon.vercel.app/" target="_blank" rel="noreferrer"><img src={cheatheon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cheatheon.vercel.app/" target="_blank" rel="noreferrer"><h2>Cheatheon</h2></a>
                <p>Developed a leetcode contest plagiarism detector tool using Python, MongoDB, ReactJS, NodeJS.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KaranKamath21/ARC-Challenge" target="_blank" rel="noreferrer"><img src={arc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KaranKamath21/ARC-Challenge" target="_blank" rel="noreferrer"><h2>ARC Challenge</h2></a>
                <p>An AI system built to tackle reasoning-based tasks from the ARC Challenge by François Chollet, using CNNs and PyTorch to solve over 60 abstract problems.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KaranKamath21/Bibliotheca" target="_blank" rel="noreferrer"><img src={library} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KaranKamath21/Bibliotheca" target="_blank" rel="noreferrer"><h2>Bibliotheca</h2></a>
                <p>Developed a feature-rich, responsive library app in Flutter with 10+ UI screens, supporting book search, borrowing, returns, and user profile management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KaranKamath21/medirisk" target="_blank" rel="noreferrer"><img src={medirisk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KaranKamath21/medirisk" target="_blank" rel="noreferrer"><h2>Medirisk</h2></a>
                <p>Designed a ML-powered risk analysis tool that assesses patient conditions and predicts medical risks by leveraging Machine Learning models and domain-specific data.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;