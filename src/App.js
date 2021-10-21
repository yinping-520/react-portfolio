import React from 'react';
import { useState } from "react";
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Form from './components/Form/index'
import Aboutme from './components/Aboutme'
import Resume from './components/Resume'



function App() {
    const [display, setDisplay] = useState('aboutme')
    function renderSwitch(){
        switch (display) {
             case 'aboutme':
                 return <Aboutme />
               
            case 'portfolio':
                return <Project />
              
            case 'contact':
                return <Form />
             
             case 'resume':
                 return <Resume />
          
        
            default:
                break;
          
        }

    }
    return   (
        <div>
    <Header display={display} setDisplay={setDisplay}/>
    {renderSwitch()}
   
    <Footer />
    </div>)

        
    
}

export default App;