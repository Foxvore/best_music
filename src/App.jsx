import './App.css';
import './assets/css/style.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Kpop from './components/Kpop';
import Jpop from './components/Jpop';

function App() {
  return (
    <div>
      <div className="home" id="Home">
        <Navigation />
        <Home />
      </div>

      <div className="kpop" id="kpop">
        <Kpop />
      </div>

      <div className="jpop" id="jpop">
        <Jpop />
      </div>
    </div>
  );
}

export default App;