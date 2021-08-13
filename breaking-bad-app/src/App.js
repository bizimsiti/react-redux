import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Quotes from "./pages/Quotes";
function App() {
  return (
    <Router>
      <nav className="menu-container">
        <ul className="menu-list">
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/char/:id">
            <Details />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
