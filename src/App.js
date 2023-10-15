

import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {  useState } from 'react';

import Alert  from './component/Alert';
// import { 
//   BrowserRouter as Router,
//         Switch,
//          Route, 
//          } 
//          from 'react-router-dom';

function App() {
  const[mode , setDarkMode] =  useState('light');
  const [modeText,setModeText]= useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message , type) => {
    setAlert({
      mess:message,
      type :type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode =()=> {
    if(mode === 'light'){
      setDarkMode('dark');
      setModeText("Enable Light Mode")
      document.body.style.backgroundColor='gray'
      showAlert("Dark Mode has been Enabled","success")
      document.title="TextUtils/Dark Mode"
    }else{
      setDarkMode('light');
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been Enabled","success")
      document.title="TextUtils/Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode} modeText={modeText} AboutText ="About" />
  <Alert  alert={alert} />
  <div className="container my-3"> 
  {/* <Switch> */}
          {/* <Route exact path="/about"> */}
           {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading = "Enter the text to anlayaze" showAlert={showAlert} mode={mode}  />
          {/* </Route> */}
    {/* </Switch> */}
  </div>
    {/* </Router> */}
  </>

  );
}

export default App;
