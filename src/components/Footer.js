import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer(){
    return(
        <footer>
            <div style={{display:"flex",
            justifyContent:'center', 
            background:'DarkSlateBlue', 
            height:70
            }}>
                <a href='https://github.com/yinping-520'>
                    <FontAwesomeIcon icon={faGithub} size="lg"
                        style={{height:30, 
                        width:30, 
                        padding:20, 
                        color:'white'}}/></a>
                <a href='www.linkedin.com/in/yinping-gao'>
                    <FontAwesomeIcon icon={faLinkedin} size="lg"
                        style={{height:30, 
                        width:30, 
                        padding:20, 
                        color:'white'}}/></a>
            </div>
    
        </footer>
    )

}

export default Footer