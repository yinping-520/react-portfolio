import React from "react";
import image from '../img/myphoto.png'

const styles ={
    main:{
        height:650,
        background:'DarkSlateBlue'
    },
    bodyStyle:{
        padding:40,
        display:'flex',
        justifyContent:'flex-start',
        flexDirection: 'column'

    },
    imgStyle:{
        border: `2px black solid`,
        width:'100px',
        height:'100px',
        borderRadius:'100%',
        marginTop:30
    }
    
    
}

function Aboutme(){

    return(
        
        <main style={styles.main}>
            <div style={styles.bodyStyle}>
                <h3 style={{paddingLeft:0
                }}>About Me</h3>
                <img src={image} alt="myphoto" 
                style={styles.imgStyle}/>
                <p style={{color:'white' ,paddingTop:30
                }}>
                Hi There, I’m Vishal and i am Front-End Web Developer. It's been 2 years, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design projects.

                I have done my graduation in Computer Science.

                My Skill Set : HTML5, CSS3, JavaScript.

                I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
                </p>

            </div>
        </main>
    )


}

export default Aboutme;