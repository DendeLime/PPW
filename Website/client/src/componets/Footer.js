import React from "react";
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


function Footer() {

    return(
        <div className="Footer">

            <div className="bottom-nav">
                <a href="https://github.com/DendeLime" target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize="large"/></a>
                <a href="https://www.linkedin.com/in/denver-grevious-61a924217/" target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize="large" /></a>
                <a href="mailto:Dende52@hotmail.com" target="_blank" rel="noreferrer">
                    <MailOutlinedIcon fontSize="large" /></a>
            </div>

        </div>
    );
}


export default Footer;