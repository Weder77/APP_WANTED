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
import AreaMonsters from './pages/AreaMonsters';



const routes = [
  {
    path: "/index",
    main: () => <HomePage />
  },
  {
    path: "/monsters",
    main: () => <Monsters request={'/api/monsters'} />
  },
  {
    path: "/astrub",
    main: () => <AreaMonsters req={'/api/positions/1'} />
  },
  {
    path: "/amakna1",
    main: () => <AreaMonsters req={'/api/positions/7'} />
  },
  {
    path: "/amakna2",
    main: () => <AreaMonsters req={'/api/positions/8'} />
  },
  {
    path: "/bonta",
    main: () => <AreaMonsters req={'/api/positions/10'} />
  },
  {
    path: "/brakmar",
    main: () => <AreaMonsters req={'/api/positions/10'} />
  },
  {
    path: "/enutrosor",
    main: () => <AreaMonsters req={'/api/positions/4'} />
  }, 
  {
    path: "/srambad",
    main: () => <AreaMonsters req={'/api/positions/5'} />
  }, 
  {
    path: "/xelorium",
    main: () => <AreaMonsters req={'/api/positions/6'} />
  },
  {
    path: "/sufokia",
    main: () => <AreaMonsters req={'/api/positions/9'} />
  },
  {
    path: "/frigost1",
    main: () => <AreaMonsters req={'/api/positions/2'} />
  },
  {
    path: "/frigost2",
    main: () => <AreaMonsters req={'/api/positions/3'} />
  },
  {
    path: "/saharach",
    main: () => <AreaMonsters req={'/api/positions/11'} />
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
      </Router >
    );
  }
}