import React, { useEffect, useState } from "react";
import './About.css'

function About() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch ("http://localhost:8080/About")
    .then((response) => response.json())
    .then((data) => {
    const urlList = data
    setImages(urlList)
  })
}, [])
    return(
      <div className="about-body">

      <div className="about-left">
        
        <div className="about-header">
          <h1>Hello, I'm Denver Grevious</h1>
        </div>

        <div className="about-content">
          <h1>Passion</h1>
            <p>I'm a dedicated software engineer with an ardent commitment to the development of multifaceted software solutions.
            This mostly stems from wanting to create cool and versatile software to improve production, quality of life, or streamline complex processes.
            I am driven by the belief that technology should be a catalyst for positive change, enhancing efficiency and user experiences.
            Whether it's optimizing workflows, enhancing user interfaces, or solving intricate challenges, I am committed to making software to have a meaningful impact in our rapidly evolving digital world.
            </p>
          <h1>My Journey</h1>
            <p> My journey into the world of technology and software development began with my earliest encounters with video games.
            The sheer thrill of gaming sparked a profound fascination within me, igniting a desire to understand the magic behind the screen and perhaps even create my own games someday.
            However, that youthful aspiration evolved over time. <br/> <br />
            Today, my focus has shifted towards automating personal tasks and crafting useful tools with the intent of enhancing efficiency and my future endeavors.
            I must admit, I initially hesitated to commit to the path of software engineering. Before finding my niche, I explored various avenues, including contemplating a career in the medical field as a radiologist or pharmacist.
            Yet, as time unfolded, I realized that the medical realm wasn't my true calling.
            My journey took me through the labyrinth of networking and IT, but I still found myself seeking clarity about my life's purpose.
            I ventured into culinary arts, contemplating a professional career as a chef, but eventually, I decided to keep cooking as a cherished hobby rather than a profession. <br/> <br/>
            My quest to discover my true passion led me through diverse fields, but it wasn't until I sat down and made a conscious decision to pursue software engineering that everything fell into place.
            As I delved into beginner computer science courses, I began to sense a newfound enthusiasm and drive.
            It was during this time that my passion for software development truly ignited, as I realized that creating, designing, and problem-solving in the digital realm was where my heart belonged.
            </p>
          <h1>Hobbies/Pastimes</h1>
            <p>In my free time, I enjoy various activities, such as hiking in the Rocky Mountains or taking leisurely strolls around the area.
            Additionally, I'm an avid video game enthusiast, with a particular fondness for titles crafted by FromSoftware and Nintendo.
            As a huge fan of anime, one of my all-time favorite movies is "A Silent Voice" (映画 聲の形), and I have an ongoing love for the series "One Piece" (ワンピース).
            When I'm not exploring virtual worlds or enjoying captivating animations, I also have a passion for cooking.
            I'm constantly on the lookout for new dishes to prepare, using them as opportunities to hone my culinary skills.
            </p>
        </div>
      </div>

      <div className="about-right">
        <img src= {images.waterfall} alt="Waterfall cascading down"/>
      </div>
    </div>

        
    );
}



export default About;