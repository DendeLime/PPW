import React, {useEffect, useState} from "react";
import  "../routes/Projects.css";

function DataTable({info}) {
    const blocks = []
    const tags = []

    info.forEach(element => {

        element["lang-tags"].forEach(tag => {
            tags.push(
                <p>{tag}</p>
            ) 
        });
        
        blocks.push(
            <div className="content-project">
                <section className="block">
                    <header>
                      <h2>{element.title}</h2>
                    </header>
                    <div className="main-row">
                        <section className="images"> 
                          <img src={element['image-key']} alt="Project" width={150} height={250}></img>
                        </section>
                        <section className="body-content">
                          <a href={element['project-link']}> denvergrevious.com </a>
                          <article>{element.description}</article>
                        </section>
                    </div>
                    <div className="tags">
                        {tags}
                    </div>

                </section>

            </div>
        );
    });

    return(
        <div>
          {blocks}
        </div>
        );

}


function ProjectData() {
    const [info, setInfo] = useState([])

    function getData() {
      fetch("http://localhost:8080/Projects")
      .then((response) => response.json())
      .then((data) => {
          setInfo(data)
        })
    }

useEffect(() => {
    getData()
},[]);


    return(

        <div className="project-title">
            <DataTable info={info} />
            
            
        </div>
    );
}


export default ProjectData;