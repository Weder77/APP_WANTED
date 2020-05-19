import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';


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

function allmonsters() {
  fetch("http://localhost:8000/api/monsters/")
    .then(resp => resp.json())
    .then(
      (result) => {
        console.log(result)
      }
    )
}

const Monsters = () => {
  const classes = style();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  allmonsters();

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
          <div className={classes.flex}>
            <div className={classes.firstBox}>
              <h2>Fouduglen l'Écureuil -<span className={classes.level}>lvl 20</span></h2>
              <div className={classes.boxMonsters}>
                <img alt='' className={classes.img} src={require('./463.png')} />
                <div className={classes.localisation}>Localisation : Cité d'astrub </div>
                <div className={classes.boxRes}>
                  <div className={classes.column}>
                    <Tooltip title="Vitalité">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/vie.png')} />
                        <span className={classes.number}>2000</span>
                      </p>
                    </Tooltip>

                    <Tooltip title="Points d'actions">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/pa.png')} />
                        <span className={classes.number}>10</span>
                      </p>
                    </Tooltip>

                    <Tooltip title="Points de déplacement">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/pm.png')} />
                        <span className={classes.number}>4</span>
                      </p>
                    </Tooltip>

                  </div>

                  <div className={classes.column}>
                    <Tooltip title="Résistance Eau">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/reseau.png')} />
                        <span className={classes.res}>18</span>%
                    </p>
                    </Tooltip>
                    <Tooltip title="Résistance Feu">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/resfeu.png')} />
                        <span className={classes.res}>10</span>%
                    </p>
                    </Tooltip>
                    <Tooltip title="Résistance Terre">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/resterre.png')} />
                        <span className={classes.res}>45</span>%
                    </p>
                    </Tooltip>
                    <Tooltip title="Résistance Air">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/resair.png')} />
                        <span className={classes.res}>45</span>%
                    </p>
                    </Tooltip>
                    <Tooltip title="Résistance Neutre">
                      <p>
                        <img alt='' className={classes.picto} src={require('./img/resneutre.png')} />
                        <span className={classes.res}>-5</span>%
                    </p>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.secondBox}>
              <h2 className={classes.title}>Sorts, description et astuces</h2>
              <div className={classes.sorts}>
                <p>
                  <span className={classes.bold}>Casse-noisettes : </span> De 1 à 6PO, modifiable. Retire tout type d'invulnérabilité à sa cible et lui inflige 10% de ses points de vie dans l'état Neutre. Inflige également de faibles dommages dans l'élément Terre.
              </p>
                <p>
                  <span className={classes.bold}>Discrétion : </span> Rend Fouduglen invisible durant 3 tours, lui octroie un bonus de 1PM et de 10 esquive PM durant 4 tours.
              </p>

              </div>
              <div className={classes.description}>
                <span className={classes.bold}>Description :</span> Ce recherché ne possède pas de fonctionnement spécifique nécessitant une stratégie particulière. Faites toutefois attention à son sort Casse-noisettes qui peut surprendre lorsque l'on ne le connaît pas.
              </div>
              <div className={classes.astuce}>
                <span className={classes.bold}>Astuce :</span> Pas de stratégie particulière.
              </div>
            </div>
          </div>


        </TabPanel>
      </div>
    </div>
  );

}

export default Monsters;
