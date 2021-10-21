import React, { useState }from "react";

const styles ={
    ulStyle: {
        display: 'inline-flex',
        alignItems: 'baseline',
        flexWrap: 'wrap'
    },

    listStyle: {
        listStyle:'none',
        flexDirection: 'row',
        padding: 20,
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'white',
        cursor:'pointer'
    }
}

function Nav({display, setDisplay}){
    
    return(
    <nav >
        <ul style={styles.ulStyle}>
            <li onClick={()=> setDisplay('aboutme')} style={styles.listStyle}>About Me</li>
            <li onClick={()=> setDisplay('portfolio')} style={styles.listStyle}>Portfolio</li>
            <li onClick={()=> setDisplay('contact')} style={styles.listStyle}>Contact</li>
            <li onClick={()=> setDisplay('resume')} style={styles.listStyle}>Resume</li>
        </ul>
    </nav>)
}

export default Nav