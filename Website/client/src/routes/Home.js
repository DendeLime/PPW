import React, { useEffect, useState } from "react";
import './Home.css';
import '../db/resume-data.js'


function Home(){
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch ("http://localhost:8080/")
    .then((response) => response.json())
    .then((data) => {
    setImages(data)
  })
}, [])
    return(
      <div className="homepage" style={{backgroundImage:`url(${images.background})`}}>
        <div className="content" >
            <div className="profile">
              <img src={images.profile} alt="profile"/>
            </div>
          <div className="main-content">

           
            <h1 className="welcome-heading">Welcome to my website!</h1>
            
            <p className="welcome-text">
              
            
              Here, you can explore my software engineering projects and learn about me.  <br/>
              Reach out to discuss your project, check out my work, or talk about your computational needs.
              Let's collaborate to find the perfect solution together. No pressure, just a friendly conversation about great software!
             </p>
            <p className="welcome-text">
              Please bear in mind that the website is a work in progress, so any mess you encounter is temporary and will be tidied up soon.
              <br/>Thank you for your understanding.
            </p>
          </div>
        </div>
      </div>
  );
}



export default Home;

