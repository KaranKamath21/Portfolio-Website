import React from "react";
import '../assets/styles/Publications.scss';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  description?: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title: "Experimental Study on Designing Advanced Driver Assistance System for Two-Wheelers using Mobility and Physiological Sensors",
    authors: "Karan Kamath, Daiwat Vyas, Manish Chaturvedi, Naveen Kumar, Piyusha Gupta",
    journal: "18th IEEE International Conference on Vehicular Electronics and Safety (ICVES)",
    year: 2024,
    description: "Advanced Driver Assistance Systems (ADAS) enhance driver safety through various technologies. In high-end cars, ADAS typically uses computer vision-based solutions, such as eye-tracking, to monitor driver attention, mood, and drowsiness. However, these ADAS solutions are challenging to implement for two-wheeler (2W) drivers, who constitute about 80% of drivers population in India, mainly due to helmet usage and the unique dynamics of 2W vehicles. This paper investigates improving 2W driver safety through integrating mobility and physiological sensors for ADAS. Experimental studies evaluated a novel ADAS framework combining mobility sensor data (e.g., speed, acceleration, position) with physiological parameters (e.g., heart rate, etc.). This fusion of sensors data approach enables monitoring vehicle dynamics and driver conditions for providing adaptive safety interventions by identifying aggressive/non-aggressive and stress/non-stress patterns. To facilitate the collection of mobility and physiological sensors data a mobile application was developed using Flutter. The physiological parameters were captured from the smart-watch paired with the smart-phone and the mobility parameters were captured from the mobility sensors that were in-built in the smart-phone. The data was collected in Navi-Mumbai area of India. Preliminary experiments conducted using these integrated sensors data show promising results. To incorporate supervised approach for Driver Behaviour Analysis (DBA) requires a tedious task of manual tagging and each driver reacts differently to the different situations that arise while driving. So, an un-supervised learning approach has been incorporated and clustering techniques like k-Means, Gaussian Mixture Model (GMM), Hierarchical Clustering, and k-Means with Dynamic Time Wrapping (DTW) analysed the sensor data to identify patterns indicating potential hazards or driver impairment. The findings based on the preliminary experimental studies done indicate that for two cluster groupings (k=2), K-Means, K-Means with DTW, and GMM show comparable performance. Also, GMM and k-Means clusters exhibit similar average speeds, primarily around 3.96 km/h and 22.89 km/h respectively. k-Means(DTW) results are identical to k-Means.",
    link: "https://ieeexplore.ieee.org/abstract/document/10928133"
  },
];

interface PublicationsProps {
  mode: string;
}

function Publications({ mode }: PublicationsProps) {
  return (
    <div className="publications-title" id="publications">
      <h1>Publications</h1>
      <div className="publication-container">
        {publications.map((pub, index) => (
          <div key={index} className="publication-card">
            <h3 className="publication-title">{pub.title}</h3>
            <p className="publication-description">{pub.description}</p>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-journal">{pub.journal} ({pub.year})</p>
            {pub.link && (
              <a className="publication-link" href={pub.link} target="_blank" rel="noopener noreferrer">Show Publication</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
