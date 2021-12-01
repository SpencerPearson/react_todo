import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./components/Bootstrap";
import Navigation from "./components/Navigation";
import Todos from "./components/Todos/Todos";
import Login from "./components/Login";
import Categories from "./components/Todos/Categories";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {AuthProvider} from "./Contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/todos" component={Todos} />
            <Route path="/categories" component={Categories} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
