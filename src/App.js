import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import Monsters from './pages/Monsters';



const routes = [
  {
    path: "/index",
    main: () => <HomePage />
  },
  {
    path: "/allmonsters",
    main: () => <Monsters />
  },
];

export default class App extends Component {
  render() {
    return (
      <Router>

        <Hidden mdDown>
          <Menu />
        </Hidden>


        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </Switch>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router >
    );
  }
}