import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    } , 1500)
  }

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Has been enabled" , "success");
    }

  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title = "Textutils"  mode = {mode} aboutText = "About" togglemode = {togglemode}/>
        <Alert alert = {alert}/>
        <div className = "container my-3">
            {/* <Routes> */}
                {/* <Route path="/about" element={<About/>}> </Route> */}
                <Textform showAlert = {showAlert} heading = "Enter the text" mode = {mode}/>
            {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
