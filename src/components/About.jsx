import React from 'react'

const About = () => {
    return (
        <div className="about_container">
            <h3 className="project_header">About Me</h3>
            <div className="journey_container">
            <div className="paragraph_container">
                <p className="my_journey">
                    I am a self-motivated person who began learning to code in the summer of 2020.
                    Over the past year I've become proficient in HTML, CSS, JavaScript, Python, and Java.
                </p>
                <p className="my_journey">
                    In my previous role, I worked with business units and
                    customers to solve their problems with technological solutions.  
                    With a background working between businesses and IT, I have
                    proven skills in project management, organization, and software updates via the
                    Agile model. This experience has given me strong problem-solving abilities and professional
                    communication skills.
                </p>
                <p className="my_journey">
                    I hold an MBA with a concentration in Finance from the University of
                    Akron.
                </p>
            </div>
            
            <div className="paragraph_container">
                <h3 className="project_header">My Learning Journey</h3>
                <p className="my_journey">
                    I began learning by taking online Python, HTML, and CSS courses via <a className="body_link" href="https://www.codecademy.com/">Codecademy</a> in 
                    the summer of 2020. Once I felt I had a solid foundation I began to work on personal <a className="body_link" href="/portfolio">projects</a> 
                    because I learn best by doing. I fell in love with web development while working on these projects, 
                    but I felt I didn't understand the core concepts of web development yet. 
                    Which is why I enrolled in the 20 week full stack Java Development course at <a className="body_link" href="https://www.techtalentsouth.com/courses/full-time-java-software-development/">Tech Talent South</a>.
                </p>
            </div>
            </div>

            
            <div className="curriculum_container">
                <h3 className="curriculum_header">My Learning Resources</h3>
                <div className="learning_resources_container">
                    <div className="medium_container">
                        <h5 className="medium_header">Codecademy Courses</h5>
                        <ul className="medium_list">
                            <li><a href="https://www.codecademy.com/learn/learn-html">HTML</a></li>
                            <li><a href="https://www.codecademy.com/learn/learn-css">CSS</a></li>
                            <li><a href="https://www.codecademy.com/learn/introduction-to-javascript">JavaScript</a></li>
                            <li><a href="https://www.codecademy.com/learn/learn-java">Java</a></li>
                            <li><a href="https://www.codecademy.com/learn/learn-python-3">Python</a></li>
                        </ul>
                    </div>
                    <div className="medium_container">
                        <h5 className="medium_header">Books</h5>
                        <ul className="medium_list">
                            <li><a href="https://ehmatthes.github.io/pcc_2e/regular_index/">Python Crash Course</a></li>
                            <li><a href="https://automatetheboringstuff.com/">Automate the Boring Stuff</a></li>
                        </ul>
                    </div>
                    <div className="medium_container">
                        <h5 className="medium_header">Bootcamp Classes</h5>
                        <ul className="medium_list">
                            <li><a href="https://www.techtalentsouth.com/courses/code-immersion/">Code Immersion - Java</a></li>
                            <li><a href="https://www.techtalentsouth.com/courses/code-immersion/">Advanced Java</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="resume__container">
            
                <h3 className="experience_header">Relevant Experience</h3>
            
                <div className="job_container">
                    <div className="job_title_container">
                        <h4 className="job_title">Business Consulting Specialist</h4>
                        <h4 className="job_title_line">|</h4>
                        <h4 className="job_employer">Nationwide Insurance</h4>
                        <h4 className="job_title_line">|</h4>
                        <h4 className="job_date">August 2017 - August 2020</h4>
                    </div>
            
                    <div className="description_container">
                        <div className="job_overview_container">
                            <h3 className="overview_header">Job Overview</h3>
                            <p className="experience__overview">
                                In my previous role, I was a project lead. My main priority was overseeing applications
                                our business units used for their day-to-day responsibilities. I was responsible to ensure
                                the applications maintenance, defect management, and enhancements went smoothly. 
                                This included troubleshooting, writing requirements for developers, testing changes
                                in UAT, and ensuring trouble-free production deployments.
                            </p>
                        </div>
                        <div className="relevant_skills">
                            <h3 className="relevant_skills_header">Relevant Skills</h3>
                            <ul className="relevant_skills_list">
                                <li>Agile Methodology</li>
                                <li>Jira Software</li>
                                <li>User Stories/Requirements</li>
                                <li>User Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
                <p className="linkedin_ref">
                    For more information about my work history, visit my <a className="body_link" href="https://www.linkedin.com/in/wsethgreen/">LinkedIn</a> or 
                    download my <a className="body_link" href="/download">resume</a>.
                </p>
        
        </div>
    )
}

export default About;
