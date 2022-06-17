
import './App.css';
import React, { useState } from 'react';
import Alert from './components/alert'
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
let name = "jay";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212539';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* /users --> Component 1
        /users/home --> Component 2 */}
        <BrowserRouter>
          <Routes>
            <Route path="about"
              element= {<About mode={mode} />}/>

            <Route path="/"
              element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}/>

          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
