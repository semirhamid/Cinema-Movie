import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer(props){

    return(
        <footer>
            <p>Cinema Movies @2022 </p>
            <p className="developer">Developed by Semir Hamid</p>
            <div className="social-media">
                <a href="https://t.me/Kim_jong_semirF"><FontAwesomeIcon style={{color: " #229ED9"}} className="icons" icon={faTelegram}></FontAwesomeIcon></a>
                <a href="https://www.facebook.com/semir.semir.5832343/"><FontAwesomeIcon style={{color: "red"}} className="icons" icon={faInstagram}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/semir-hamid-1b9b8b1b7/"><FontAwesomeIcon style={{color: " #00acee"}} className="icons" icon={faTwitter}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/semir-hamid-1b9b8b1b7/"><FontAwesomeIcon style={{color: "#0072b1"}} className="icons" icon={faLinkedin}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/semir-hamid-1b9b8b1b7/"><FontAwesomeIcon style={{color: "white"}} className="icons" icon={faGithub}></FontAwesomeIcon></a>
            </div>
        </footer>
    )
}

export default Footer