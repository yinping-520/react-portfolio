import React from "react";
import choredoor from '../img/chore-door.png'
import recipebook from '../img/recipebook.png'
import rps from '../img/rock-paper-scissor-img.png'
import weather from '../img/weatherdashboard.png'



const styles ={
    main:{
        height:650,
        background:'DarkSlateBlue'
    },
    bodyStyle:{
        padding: 50
    },
    imgStyle:{
        width: "auto",
        height: 250
        
    }
}


function Project(){
    return(
        <main style={styles.main}>
            <div className="row row-cols-1 row-cols-md-2 g-4" style={styles.bodyStyle}>
                <div className="col">
                  <div className="card">
                    <img src={choredoor} className="card-img-top" alt="chore door" style={styles.imgStyle}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={recipebook} className="card-img-top" alt="recipe book" style={styles.imgStyle}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={rps} className="card-img-top" alt="rock paper scissors" style={styles.imgStyle}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={weather} className="card-img-top" alt="weather dashboard" style={styles.imgStyle}/>
                  </div>
                </div>
            </div>

        </main>
    )

}

export default Project;