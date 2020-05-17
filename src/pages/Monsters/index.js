import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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


const AllMonsters = () => {
  const classes = style();

  const [value, setValue] = React.useState(0);

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
          <Tab label="Fouduglen l'Écureuil" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0} className={classes.parent}>
          <h2>Fouduglen l'Écureuil</h2>
          <div>Localisation : </div>
          <div className={classes.boxMonsters}>
            <img className={classes.img} src={require('./463.png')} />
          </div>
          <div><span className={classes.bold}>Description :</span> Culpa consectetur consectetur ea et mollit commodo minim occaecat adipisicing aliquip nulla nostrud et. Tempor consectetur cillum labore aute non do sit enim excepteur nulla. Occaecat enim ullamco veniam excepteur Lorem velit deserunt nisi dolore fugiat dolore nostrud nisi quis. Deserunt cupidatat tempor nulla ad. </div>
          <img className={classes.img} src={require('./img/resair.png')} />
          <img className={classes.img} src={require('./img/reseau.png')} />
          <img className={classes.img} src={require('./img/resfeu.png')} />
          <img className={classes.img} src={require('./img/resterre.png')} />
          <img className={classes.img} src={require('./img/CaracSheet.png')} />


        </TabPanel>
      </div>
    </div>
  );

}

export default AllMonsters;
