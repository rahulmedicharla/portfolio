import './App.css';
import { content } from './contents';
import Navigation from './components/Nav/Navigation';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className='background'>
      <div className='container'>
        <div className='content'>
          <Landing></Landing>
        </div>
        <div className='nav'>
          <Navigation anchorTags={content.anchorTags} links={content.links}></Navigation>
        </div>
      </div>
    </div>
  );
}

export default App;
