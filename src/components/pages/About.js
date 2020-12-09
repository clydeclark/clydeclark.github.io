import React from "react";

function About() {
    return(
        <div>
            <div class="col-md-12">
                <h1>About Me</h1>
            </div>
            <div class="container">
                <div class="image-wrapper float-left pr-3">
                    <img width="300px" src={process.env.PUBLIC_URL + '/Resources/Clyde.jpg'} alt="Clyde"/>
                </div>
                <div class="single-post-content-wrapper p-3">
                        <p>I'm a US Navy veteran and current full-stack developer with experience in the MERN stack (MongoDB, Express, React, Node.js). I
                        especially enjoy the coding side of web development.</p>
                        <p>I really love learning and consider it essential for my own happiness. In my spare time, I like
                        learning more about programming, tabletop role playing, and personal development.</p>
                        <p>Find me on <a href="https://www.linkedin.com/in/clyde-clark-8919541b0/" rel="noopener noreferrer">LinkedIn</a></p>
                        <p>Access my <a href={process.env.PUBLIC_URL + '/Resources/Clyde_Clark_Resume.pdf'}>Resume</a></p>
                </div>
            </div>

        </div>
    )
};

export default About;