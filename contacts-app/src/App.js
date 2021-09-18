import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Contacts}></Route>
          <Route exact path="/edit/:id" component={Edit}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
