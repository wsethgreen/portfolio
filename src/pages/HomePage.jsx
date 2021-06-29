import React from 'react'
import Nav from'../components/Nav';
import StickyFooter from '../components/StickyFooter.jsx';
import Portfolio from '../components/Portfolio';

const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className="greeting_container">
                <h1 className="greeting">Hi, I'm Seth Green, an aspiring Web Developer.</h1>
                <div className="btn_link_container">
                    <a className="btn_link" href="/about">Read More About Me</a>
                    <a className="btn_link" href="/portfolio">See My Portfolio</a>
                    <a className="btn_link" href="https://github.com/wsethgreen">See My GitHub</a>

                </div>
            </div>
            <div className="highlights_container">
                <div className="intro_container">
                    <p className="introduction">
                    In the summer of 2020, my entire department at work was cut. Unsure of what my future 
                    held for me I began to learn programming as a new hobby. As I continued to learn, I fell 
                    in love with programming and its seemingly endless possibilities. Now I'm trying to turn 
                    my passion into a career. My goal is to become a full stack developer. I've been self teaching 
                    myself to code since June 2020. I enrolled in a coding bootcamp at Tech Talent South starting in 
                    April of 2021. Bootcamp will be finished in August of 2021.
                    </p>
                </div>
                <div className="skills_container">
                    <h5 className="skill_header">Languages</h5>
                    <ul className="skill_list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="skills_container">
                    <h5 className="skill_header">Frameworks</h5>
                    <ul className="skill_list">
                        <li>Flask</li>
                        <li>React</li>
                        <li>Spring</li>
                    </ul>
                </div>
                <div className="skills_container">
                    <h5 className="skill_header">IDEs</h5>
                    <ul className="skill_list">
                        <li>VS Code</li>
                        <li>IntelliJ</li>
                    </ul>
                </div>
            </div>
            <Portfolio />
            <StickyFooter />
        </div>
    )
}

export default HomePage;
