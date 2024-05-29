import {useState , useEffect} from 'react';


import './App.scss';
import Header from './Components/header';
import Contsint from './Components/contsint';
import Skills from './Components/skill';
import Project from './Components/project'

import ClipLoader from "react-spinners/ClipLoader";

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




