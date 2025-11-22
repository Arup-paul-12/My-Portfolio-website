import React from "react";
import portfolio from '../assets/images/portfolio1.png';
import game1 from '../assets/images/tic tac.png';
import passcode from '../assets/images/passs.png';
import amazone from '../assets/images/amazone.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://simple-portfolio-tau-ten.vercel.app/" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Arup-paul-12/simple-portfolio" target="_blank" rel="noreferrer"><h2>My Simple Portfolio</h2></a>
                <p>A simple portfolio design is a personal website or web page that showcases your skills, projects, achievements, and contact information in a clean, easy-to-navigate format i make this when I'm first in this web development world</p>
            </div>
            <div className="project">
                <a href="https://tic-tac-toe-game-peach-two.vercel.app/" target="_blank" rel="noreferrer"><img src={game1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Arup-paul-12/tic-tac-toe-game" target="_blank" rel="noreferrer"><h2>Tic Tac Toe game</h2></a>
                <p>A Tic Tac Toe game project is a programming project where you create the classic 3x3 grid game for two players. The goal is to place three of your marks (X or O) in a horizontal, vertical, or diagonal row before your opponent does.</p>
            </div>
            <div className="project">
                <a href="https://auto-generate-password.vercel.app/" target="_blank" rel="noreferrer"><img src={passcode} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Arup-paul-12/Auto-generate-Password" target="_blank" rel="noreferrer"><h2>Auto Random Password Generator</h2></a>
                <p>A random password generator is a tool or program that creates passwords automatically using random characters. Which is create using html ,css & javascript.</p>
            </div>
            <div className="project">
                <a href="https://amazone-clone-project-rho.vercel.app/" target="_blank" rel="noreferrer"><img src={amazone} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Arup-paul-12/AMAZONE-clone-project" target="_blank" rel="noreferrer"><h2>Amazone Clone</h2></a>
                <p>An Amazon clone project is a web application designed of the Amazon e-commerce platform. It is usually built as a learning project for developers to practice front end development.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;