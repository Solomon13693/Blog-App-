import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";

function App() {
  return (
    <div className="home">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/create" component={Create}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
