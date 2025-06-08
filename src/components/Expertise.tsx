import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "Node",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Postman", 
    "Magento2",
    "Flutter",
    "PHP"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "NGINX",
    "Docker",
    "AWS",
    "Linux",
];

const labelsThird = [
    "Python3",
    "Numpy",
    "Pandas",
    "Machine Learning",
    "Pytorch",
    "Tensorflow",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I streamline deployment workflows by implementing robust CI/CD pipelines and DevOps strategies that ensure efficient and reliable application delivery. My work includes deploying new websites from scratch and automating deployment phases to reduce Go-Live risk and improve overall developer velocity.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>From building a full-stack plagiarism detection system to contributing to large-scale app UI development, I create performant and scalable web applications using technologies like React, Node.js, and MongoDB. I focus on end-to-end ownership—from frontend interaction to backend logic and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>With practical experience in ML model development and data-driven research, I've implemented AI systems for reasoning tasks and driving behavior analysis. I specialize in applying deep learning techniques using PyTorch and TensorFlow to solve real-world problems at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;