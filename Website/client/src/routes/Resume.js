import React from "react";
import './Resume.css';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResumeData from '../db/resume-data.js';
import FileOpenIcon from '@mui/icons-material/FileOpen';

function Resume() {
    return(
      <div className="resume-page">


        <div className="resume-left">
          <div className="resume-left-top">

            <div className="icons">
              <WorkIcon />
              <LocationOnIcon  />
              <EmailIcon />
              <a href="https://www.linkedin.com/in/denver-grevious-61a924217/" target="_blank" rel="noreferrer">
              <LinkedInIcon  /></a>
              <a href="https://drive.google.com/file/d/1XRckhD4Ku7-Z5vJlb7VKJg1uA9-A8Fy4/view?usp=sharing" target="_blank" rel="noreferrer">
              <FileOpenIcon  /></a>
              
            </div>
            <div className="profile-info">
              <ul style={{listStyle: "none"}}>
                <li>Software Engineer</li>
                <li>Colorado, U.S.</li>
                <li><a href="mailto:Dende52@hotmail.com" target="_blank" rel="noreferrer">Dende52@hotmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/denver-grevious-61a924217/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://drive.google.com/file/d/1XRckhD4Ku7-Z5vJlb7VKJg1uA9-A8Fy4/view?usp=sharing" target="_blank" rel="noreferrer">Resume PDF</a></li>
              </ul>
            </div>
          </div>


          <div className="resume-left-bottom">
            <div className="left-bottom-info">
              <h2>Programing Languages</h2>
              <ol>
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>SQL</li>
              </ol>
            </div>
            <div className="left-bottom-info">
              <h2>Dev Tools</h2>
              <ol>
                <li>Docker</li>
                <li>EC2</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Nginx</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>S3</li>
              </ol>
            </div>
            <div className="left-bottom-info">
              <h2>Frameworks/Libraries</h2>
              <ol>
                <li>Express.js</li>
                <li>Numpy</li>
                <li>OpenCV</li>
                <li>Pandas</li>
                <li>React</li>
                <li>Ruby on Rails</li>
              </ol>
            </div>
          </div>

        </div>


        <div className="resume-right">
          <div className="resume-sections">

            <div className="box">
              <h2>Professional Summery</h2>
              <p>Motivated and detail-oriented software engineer with a strong understanding of programming languages and a passion for computational solutions.
                 Equipped with a solid foundation in software engineering principles, eager to provide technical knowledge, problem solving abilities, and enthusiasm to make a positive impact.
                </p>
            </div>

            <div className="box">
              <h2>Work Experience</h2>
              <div className="main-info">
                <div className="section-info">
                  <div className="section-title">
                    <p> Stonebrook Manor LLC.</p>
                  </div>
                  <p>03/2013 - 12/2018</p>
                </div>
              <div className="description-info">
                <p>Bartender / Cook / Dishwasher / Waiter</p>
                <ul>
                  <li>Contributed as a versatile team member at a wedding/event center, ensuring smooth event execution, customer satisfaction, and high service standards.</li>
                  <li>Demonstrated strong teamwork, time management, culinary, sales, and inventory management skills.</li>
                </ul>
              </div>
              </div>
            </div>

            <div className="box">
              <h2>Education</h2>
              <div className="main-info">
                <div className="section-info">
                  <div className="section-title">
                    <p> Metropolitan State University of Denver </p>
                  </div>
                  <p>05/2023</p>
                </div>
              <div className="description-info">
                <p>B.S. in Computer Science </p>
                <p>Denver, CO</p>
              </div>
              </div>
            </div>

            <div className="box">
              <h2>School/Deprecated Projects</h2>
                <ResumeData />
            </div>

            <div className="box">
              <h2>Awards/Certificates</h2>
              <div className="main-info">
                <div className="section-info">
                  <div className="section-title">
                    <p>BSA Eagle Scout</p>
                  </div>
                  <p>2010</p>
                </div>
              </div>
            </div>

          </div>

        </div>
        
      </div>

    );
}



export default Resume;
