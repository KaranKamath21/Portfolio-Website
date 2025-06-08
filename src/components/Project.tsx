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
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KaranKamath21/Bibliotheca" target="_blank" rel="noreferrer"><img src={library} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KaranKamath21/Bibliotheca" target="_blank" rel="noreferrer"><h2>Bibliotheca</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KaranKamath21/medirisk" target="_blank" rel="noreferrer"><img src={medirisk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KaranKamath21/medirisk" target="_blank" rel="noreferrer"><h2>Medirisk</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;