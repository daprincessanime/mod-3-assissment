import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Shows from './Components/Shows';


function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shows">Shows</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shows" component={Shows}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
