import React, { useState } from "react";
import './App.css';
import CustomButton from './components/button.components/button.components'
import LoginPage from './pages/login.pages/login.pages'
import SignUpPage from './pages/signup.pages/signup.pages'
import Navbar from './components/navbar.components/navbar'
function App() {
  const [token, setToken] = useState(null);
  const list = ['home', 'tweets', 'notification']
  return (
    <div className="App">
      {
        token ? <Navbar/> : <LoginPage setToken = {setToken}/>
      }
    </div>
  );
}

export default App;
