import React from "react";
import "./Projects.css";
import ProjectData from '../db/project-data.js';

function Projects() {



    return(
        <div className="project-page">
              <h1> Portfolio Showcase </h1>
              <p>This is where you will find current projects that are either in production or in the process of being developed for production.</p>

              <div>
                <ProjectData />      
              </div>    

        </div>
    );
}



export default Projects;