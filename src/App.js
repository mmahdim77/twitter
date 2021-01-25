import React, { useState } from "react";
import './App.css';
import LoginPage from './pages/login.pages/login.pages'
import SignUpPage from './pages/signUp.pages/signup.pages'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar.components/navbar'
import PostCard from './components/post-card.components/post-card.components'
import WriteTweet from './components/write-tweet/write-tweet.components'
import Profile from './pages/profile/profile.pages'



function App() {
  const [token, setToken] = useState(null);
  const list = ['home', 'tweets', 'notification']
  const text = "Voluptate dolore fugiat ea ipsum anim eu magna eu labore."
  const name= "mohammad mahdi"
  const userName ="@mmahdim"
  const bio = "Officia non deserunt mollit anim ut esse enim sint est commodo dolor."
  const date = new Date('January 23, 2020 03:24:00')
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage setToken = {setToken}/>
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
      {/* {
        token ? <Navbar/> : <LoginPage setToken = {setToken}/>
      } */}
      {/* <Profile cover="./material/cover2.jpg" name={name} userName={userName} bio={bio} ></Profile>
      <WriteTweet/>
      <PostCard name={name} userName={userName} date={Math.floor(((Date.now()-date)/3600000)/24)} postText={text} /> */}
    </div>
  );
}

export default App;
