import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import img from '../assets/images/image.png';
import LeetCodeIcon from './icons/LeetCodeIcon';
import CodeforcesIcon from './icons/CodeforcesIcon';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={img} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KaranKamath21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/karan-kamath-a24b41227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/KarryJodd" target="_blank" rel="noreferrer"><LeetCodeIcon/></a>
            <a href="https://codeforces.com/profile/KaranKamath" target="_blank" rel="noreferrer"><CodeforcesIcon/></a>
          </div>
          <h1>Karan Kamath</h1>
          <h2>Software Developer L2</h2>
          <h4>Hi, I'm Karan Kamath, a passionate software developer with a strong foundation in full-stack development, machine learning, and DevOps. I recently completed my B.Tech in Computer Science at IIIT Vadodara and  I've built and deployed scalable web apps, contributed to AI research, and developed mobile solutions using Flutter. Whether it's optimizing backend systems, creating seamless UIs, or experimenting with neural networks, I love turning ideas into real-world solutions. I'm always eager to take on new challenges and collaborate on impactful tech projects.</h4>

          <div className="mobile_social_icons">
            <a href="https://github.com/KaranKamath21" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/karan-kamath-a24b41227/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/KarryJodd" target="_blank" rel="noreferrer"><LeetCodeIcon/></a>
            <a href="https://codeforces.com/profile/KaranKamath" target="_blank" rel="noreferrer"><CodeforcesIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
