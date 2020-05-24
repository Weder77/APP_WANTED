import React from 'react';
import { style } from './style';

const MonsterDescription = ({ pos, doplon, desc }) => {
    const classes = style();
    
    if ( desc.length == 0 ) {
        desc = "Pas de description"
    }

    return (
        <div className={classes.secondBox}>
            <div className={classes.sorts}>
                <p>
                    <span className={classes.bold}>L'avis de rechercher se recupère en : </span>{pos}
                </p>
            </div>
            <div className={classes.description}>
                <p>
                    <span className={classes.bold}>Gains :</span>{doplon}
                </p>
                <p>
                    <span className={classes.bold}>Description : </span> {desc}
                </p>
            </div>
        </div>
    );
}

export default MonsterDescription;
