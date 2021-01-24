import logo from './logo.svg';
import './App.css';
import PostCard from './components/post-card.components/post-card.components'
import CustomButton from './components/button.components/button.components'
function App() {
  const list = ['home', 'tweets', 'notification']
  return (
    <div className="App">
      <PostCard/>
    </div>
  );
}

export default App;
