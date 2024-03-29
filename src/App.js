import React from "react";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bulma/css/bulma.css";
import { NotFound } from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
