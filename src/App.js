import logo from './logo.svg';
import './App.css';
import Bootstrap from './components/Bootstrap';
import Navigation from './components/Navigation';
import Todos from '/components/Todos/Todos';
import Login from './components/Login';
import Categories from './components/Todos/Categories'
import { Route, Router, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/todos" component={Todos} />
          <Route path="/categories" component={Categories} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
