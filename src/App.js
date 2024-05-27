import {useState , useEffect} from 'react';


import './App.scss';
import Header from './Components/header';
import Contsint from './Components/contsint';
import Skills from './Components/skill';
import Project from './Components/project';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ClipLoader from "react-spinners/ClipLoader";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
    // const [loading , setLoading] =  useState(false);

    // useEffect( () => {
    //    setLoading(true)
    //    setTimeout( () => {
    //       setLoading(false)
    //    },1000)
    // },[])

  return (
    <div className="App ">
      {/* {loading ? <ClipLoader  color={'#1ac1d1'}  loading={loading}  size={150} aria-label="Loading Spinner" data-testid="loader" /> 
        : */}
        <div>
                <Header />
                <Contsint />
                <Skills /> 
                <Project />
        </div>
       
      {/* } */}
        
    </div>
  );
}

export default App;




