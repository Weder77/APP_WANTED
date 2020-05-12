import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import Menu from './components/Menu';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


const routes = [
  {
    path: "/register",
    main: () => <RegisterPage />
  },
  {
    path: "/login",
    main: () => <LoginPage />
  },
  {
    path: "/home",
    main: () => <HomePage />
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