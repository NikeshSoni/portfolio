import {useState , useEffect} from 'react';


import './App.scss';
import Header from './Components/header';
import Contsint from './Components/contsint';
import Skills from './Components/skill';
import Project from './Components/project';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {

    const [loading , setLoading] =  useState(false);

    // useEffect( () => {
    //    setLoading(true)
    //    setTimeout( () => {
    //       setLoading(false)
    //    },5000)
    // },[])

  return (
    <div className="App "> 
        <div>
            <Header />
            <Contsint />
            <Skills /> 
            <Project />
        </div>
    </div>
  );
}

export default App;




