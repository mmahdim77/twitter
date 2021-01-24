import './App.css';
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
