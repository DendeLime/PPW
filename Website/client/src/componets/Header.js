import React, {useState} from "react";
import'./Header.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Header() {
        const [showLinks, setShowLinks] = useState(false);

        return(
        <section className="Header">

          <div className="headName">
            <a href="/"><h3> Denver Grevious</h3></a>
          </div>
         <div className="rightHead">
           <div className="headLinks"  id={showLinks ? "hidden" : ""}>
              <a href="/About">About</a>
              <a href="/Resume">Resume</a>
              <a href="/Projects">Projects</a>
            </div>
            <button onClick={() => setShowLinks(!showLinks)}>
                <ReorderIcon/>
            </button>
         </div>
          
          

        </section>
        );
}


export default Header;