import React from "react";
import choredoor from '../img/chore-door.png'
import recipebook from '../img/recipebook.png'
import music from '../img/genre.png'
import weather from '../img/weatherdashboard.png'





const styles ={
    main:{
        height:1500,
        background:'DarkSlateBlue'
    },
    bodyStyle:{
        padding: 50
    },
    imgStyle:{
        width: "auto",
        height: 250,

        "&:hover": {
            background: 'black'
          },
        
    }
}


function Project(){
    return(
        <main style={styles.main}>
            <div className="row row-cols-1 row-cols-md-2 g-4" style={styles.bodyStyle}>
                <div className="col">
                <a href="https://yinping-520.github.io/Chore-Door/">
                  <div className="card">
                        <img src={choredoor} className="card-img-top" alt="chore door" style={styles.imgStyle}/>
                        <div class="card-body">
                            <a href="https://github.com/yinping-520/Chore-Door">
                                <h5 class="card-title">GitHub Repo</h5>
                            </a>
                        </div>
                  </div>
                </a>
                </div>
                <div className="col">
                  <a href="https://yinping-520.github.io/recipe-in-hand/">
                  <div className="card">
                    <img src={recipebook} className="card-img-top" alt="recipe book" style={styles.imgStyle}/>
                    <div class="card-body">
                        <a href="https://github.com/yinping-520/recipe-in-hand">
                            <h5 class="card-title">GitHub Repo</h5></a>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="col">
                  <a href="https://eom-10-4.herokuapp.com/login">  
                  <div className="card">
                    <img src={music} className="card-img-top" alt="essence of music" style={styles.imgStyle}/>
                    <div class="card-body">
                        <a href="https://github.com/yinping-520/Essence_Of_Music">
                            <h5 class="card-title">GitHub Repo</h5>
                        </a>
                    </div>
                  </div>
                  </a>
                </div>
                <div className="col">
                  <a href="https://yinping-520.github.io/weather-dashboard/">
                  <div className="card">
                    <img src={weather} className="card-img-top" alt="weather dashboard" style={styles.imgStyle}/>
                    <div class="card-body">
                        <a href="https://github.com/yinping-520/weather-dashboard">
                            <h5 class="card-title">GitHub Repo</h5>
                        </a>
                    </div>
                  </div>
                  </a>
                </div>
            </div>

        </main>
    )

}

export default Project;