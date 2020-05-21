import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MonsterCard from '../../components/MonsterCard'
import MonsterDescription from '../../components/MonsterDescription'

import { style } from './style';
// icons

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ApiCall = (param, page) => {
  const [result, setResult] = React.useState([]);
  let url
  if (page == undefined || page == null) {
    url = "http://localhost:8000" + param
  } else { 
    url = "http://localhost:8000" + param + "?page=" + page 
  }

  fetch(url, {
    method: 'get',
    headers: new Headers({
      'Accept': 'application/json'
    })
  })
    .then(resp => resp.json())
    .then(
      (res) => {
        setResult(res)
      }
    )

  return result
}

const MonstersName = (page) => {
  const monsters = ApiCall('/api/monsters', page)

  return (
    monsters.map((monster, index) =>
      <Tab label={monsters[index].name} {...a11yProps(0)} />
    )
  )
}

const MonstersStats = (page, value, classes) => {
  const monsters = ApiCall('/api/monsters', page)
  console.log(monsters)

  return (
    monsters.map((monster, index) =>
      <TabPanel value={value} index={index} className={classes.parent}>
        <div className={classes.flex}>
          <MonsterCard
            name={monsters[index].name}
            position={monsters[index].position}
            level={monsters[index].level}
            img={monsters[index].imgUrl}
            loc={monsters[index].area}
            health={monsters[index].pv}
            actionPoints={monsters[index].pa}
            movementPoints={monsters[index].pm}
            resfeu={monsters[index].resTerre}
            reseau={monsters[index].resAir}
            resterre={monsters[index].resFeu}
            resair={monsters[index].resEau}
            resneutre={monsters[index].resNeutre}
          />
          <MonsterDescription
            pos={monsters[index].position}
          />
        </div>
      </TabPanel>
    )
  )
}

const Monsters = () => {
  const classes = style()
  const page = 1

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.box}>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {MonstersName(page)}
        </Tabs>
        {MonstersStats(page, value, classes)}
      </div>
    </div>
  );
}

export default Monsters;
