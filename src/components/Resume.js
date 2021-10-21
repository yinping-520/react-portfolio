import React from "react";
import resume from '../img/resume.pdf'

const styles ={
    main:{
        height:650,
        background:'DarkSlateBlue'
    },
    body:{
        padding:50,
        color:'white'
    }

  }

function Resume(){
    return (
        <main style={styles.main}>
            <div style={styles.body}>
                <h3 style={{paddingLeft:0}}><strong>Resume</strong></h3>
                <h4>Download My <a href={resume}>Resume</a></h4>

                <h4>Front End Tech Skills</h4>
                <ul>
                    <li>React.js</li>
                    <li>HandleBars.js</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    
                </ul>

                <h4>Back End Tech Skills</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Mysql</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Appollo Server</li>
                    
                </ul>
            </div>
        </main>
    )

}

export default Resume