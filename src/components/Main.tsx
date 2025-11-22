import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import logos from '../assets/images/Arups.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={logos} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Arup-paul-12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arup-paul-491328396/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>It's Arup Paul~</h1>
          <p>Front End Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Arup-paul-12" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/arup-paul-491328396/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;