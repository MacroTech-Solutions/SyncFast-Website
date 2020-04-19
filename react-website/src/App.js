import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Host from "./Host";
import Login from "./Login";
import SignUp from "./SignUp";
import Error from "./Error";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/host" component={Host} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;
