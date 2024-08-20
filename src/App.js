import {useState , useEffect} from 'react';


import './App.scss';
import Header from './Components/header';
import Contsint from './Components/contsint';
import Skills from './Components/skill';
import Project from './Components/project';
<<<<<<< HEAD
import Contact from './Components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ClipLoader from "react-spinners/ClipLoader";
=======
// import AOS from 'aos';
// import 'aos/dist/aos.css';
>>>>>>> e0ba577776ab7406e3c162170ae1d6b92956cc9d

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
<<<<<<< HEAD
                <Header />
                <Contsint />
                <Skills /> 
                <Project />
                {/* <Contact /> */}
=======
            <Header />
            <Contsint />
            <Skills /> 
            <Project />
>>>>>>> e0ba577776ab7406e3c162170ae1d6b92956cc9d
        </div>
    </div>
  );
}

export default App;




