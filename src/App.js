import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schools from "./Schools";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
