import React, { useState, useEffect } from "react";
import './App.css';
import LoginPage from './pages/login.pages/login.pages'
import SignUpPage from './pages/signup.pages/signup.pages'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar.components/navbar'
import PostCard from './components/post-card.components/post-card.components'
import WriteTweet from './components/write-tweet/write-tweet.components'
import Profile from './pages/profile.pages/profile.pages'
import Home from './pages/home.pages/home.pages'
import TwitterHome from './pages/twitter.pages/twitter.pages'
import Statue from './pages/status.pages/status.pages'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || null);
  const [myUser, setMyUser] = useState(JSON.parse(localStorage.getItem('myUser')) || null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(()=>{
    localStorage.setItem('token', token);
  }, [token])
  useEffect(()=>{
    localStorage.setItem('myUser', JSON.stringify(myUser));
  }, [myUser])
  // useEffect(()=>{
  //   localStorage.getItem('token');
  // }, [])
  return (
    <div className="App">

      <Switch>
        <Route path="/profile/:username/status/:idx">
          <Statue refreshToken={refreshToken} token={token} myUser={myUser} />
        </Route>
        <Route path="/home">
          <Home refreshToken={refreshToken} token={token} myUser={myUser} />
        </Route>
        <Route path="/profile/:username">
          <Profile refreshToken={refreshToken} myUser={myUser} token={token} />
        </Route>
        <Route path="/login">
          <LoginPage setRefreshToken={setRefreshToken} setToken={setToken} isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen} setTheUser={setMyUser} />
        </Route>
        <Route path="/signup"  >
          <SignUpPage fromLogin={false}/>
        </Route>
        <Route path="/"  >
          <TwitterHome />
        </Route>
      </Switch>

      {/* <Profile cover="./material/cover2.jpg" name={name} userName={userName} bio={bio} ></Profile>
      <WriteTweet/>
      <PostCard name={name} userName={userName} date={Math.floor(((Date.now()-date)/3600000)/24)} postText={text} /> */}
    </div>
  );
}

export default App;
