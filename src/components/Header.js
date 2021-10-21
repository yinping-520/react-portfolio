import React from "react";
import Nav from './Navigation'
import electricity from '../img/electricity.jpeg'

const styles ={
    headerStyle: {
        height:200,
        backgroundImage: `url(${electricity})`,
        backgroundRepeat: 'repeat-x',
        display: 'flex',
        justifyContent: "space-between",
        alignContent: 'baseline',
        alignItems: 'center',
    },
    headingStyle: {
        fontSize: '3rem',
        fontWeight: 'bold',
        paddingLeft: 15,
        color: 'white'

    }
}



function Header({display, setDisplay}){
    return(
    <header style={styles.headerStyle}>
        <h1 style={styles.headingStyle}>
            Yinping Gao
        </h1>
        <Nav display={display} setDisplay={setDisplay}/>
    </header>)
}

export default Header