import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { style } from './style';

const MonsterCard = ({ name, level, img, loc, health, actionPoints, movementPoints, resfeu, reseau, resterre, resair, resneutre }) => {
    const classes = style()
    return (
        <div className={classes.firstBox}>
            <h2>{name} -<span className={classes.level}>lvl {level}</span></h2>
            <div className={classes.boxMonsters}>
                <img alt='' className={classes.img} src={img} />
                <div className={classes.localisation}>Localisation : {loc} </div>
                <div className={classes.boxRes}>
                    <div className={classes.column}>
                        <Tooltip title="Vitalité">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/vie.png')} />
                                <span className={classes.number}>{health}</span>
                            </p>
                        </Tooltip>

                        <Tooltip title="Points d'actions">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/pa.png')} />
                                <span className={classes.number}>{actionPoints}</span>
                            </p>
                        </Tooltip>

                        <Tooltip title="Points de déplacement">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/pm.png')} />
                                <span className={classes.number}>{movementPoints}</span>
                            </p>
                        </Tooltip>

                    </div>

                    <div className={classes.column}>
                        <Tooltip title="Résistance Eau">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/reseau.png')} />
                                <span className={classes.res}>{reseau}</span>%
                            </p>
                        </Tooltip>
                        <Tooltip title="Résistance Feu">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/resfeu.png')} />
                                <span className={classes.res}>{resfeu}</span>%
                            </p>
                        </Tooltip>
                        <Tooltip title="Résistance Terre">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/resterre.png')} />
                                <span className={classes.res}>{resterre}</span>%
                            </p>
                        </Tooltip>
                        <Tooltip title="Résistance Air">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/resair.png')} />
                                <span className={classes.res}>{resair}</span>%
                            </p>
                        </Tooltip>
                        <Tooltip title="Résistance Neutre">
                            <p>
                                <img alt='' className={classes.picto} src={require('./img/resneutre.png')} />
                                <span className={classes.res}>{resneutre}</span>%
                            </p>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonsterCard;
