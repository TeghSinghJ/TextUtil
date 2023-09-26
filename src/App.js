import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Routes,
//   Router,
// } from "react-router-dom";
function App() {
  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert(
        {
          msg : message,
          type : type
        }
      )
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  
  const setToggleMode = () =>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled!","success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" about="About Us" mode={mode} alert={alert} toggleMode={setToggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
    {/* <Routes> */}
      {/* <Route path='/about' element={<About/>}/> */}
      
      {/* <Route path='/' element={<TextArea heading="Enter the text below:" showAlert={showAlert} mode={mode}/>} /> */}
      <TextArea heading="Enter the text below:" showAlert={showAlert} mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
