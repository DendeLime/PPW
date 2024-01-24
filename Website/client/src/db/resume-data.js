import React, {useEffect, useState} from "react";
import  "../routes/Resume.css";

function DataTable( {info} ) {
    const rows = []
    info.forEach((element) => {
        let lang = JSON.stringify(element.languages);
        let lang_tags = lang.replace(/[[\]"]+/g,'');
        rows.push(
          <div className="main-info">
            <div className="section-info">
              <div className="section-title">
                <p>{element.title}</p>
                <a href={element.link}>link</a>
                <tag> - {lang_tags} </tag>
              </div>
            </div>
            <div className="description-info">
                <body>{element.description}</body>
            </div>
          </div>
            );
    });

    return(
        <div>
            {rows}
        </div>
    );

}

function ResumeData() {

    const [info, setInfo] = useState([])

    function getData() {
      fetch("http://localhost:8080/Resume")
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


export default ResumeData;