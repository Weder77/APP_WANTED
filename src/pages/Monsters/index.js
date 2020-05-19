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


const Monsters = () => {
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

        </Tabs>




        <TabPanel value={value} index={0} className={classes.parent}>
          <div className={classes.flex}>
            <MonsterCard name='coucou' level='21' img='oui' loc='ui' health='500' actionPoints='5' movementPoints='5' resfeu='5' resea='5' resterre='5' resair='5' resneutre='4' />
            <MonsterDescription />
          </div>
        </TabPanel>




      </div>
    </div>
  );

}

export default Monsters;
