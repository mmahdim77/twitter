import logo from './logo.svg';
import './App.css';
import PostCard from './components/post-card.components/post-card.components'
import WriteTweet from './components/write-tweet/write-tweet.components'
import Profile from './pages/profile/profile.pages'
import CustomButton from './components/button.components/button.components'
import moment from 'moment'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


function App() {
  const list = ['home', 'tweets', 'notification']
  const text = "Voluptate dolore fugiat ea ipsum anim eu magna eu labore."
  const name= "mohammad mahdi"
  const userName ="@mmahdim"
  const bio = "Officia non deserunt mollit anim ut esse enim sint est commodo dolor."
  const date = new Date('January 23, 2020 03:24:00')
  return (
    <div className="App">
      <Profile cover="./material/cover2.jpg" name={name} userName={userName} bio={bio} ></Profile>
      <WriteTweet/>
      <PostCard name={name} userName={userName} date={Math.floor(((Date.now()-date)/3600000)/24)} postText={text} />
    </div>
  );
}

export default App;
