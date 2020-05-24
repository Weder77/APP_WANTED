import React from 'react';
import { style } from './style';

const MonsterDescription = ({ pos, doplon, desc }) => {
    const classes = style();

    if (desc.length == 0) {
        desc = "Pas de description"
    }

    return (
        <div className={classes.descriptionBox}>
            <div className={classes.description}>
                <p className={classes.PWidth}>
                    <strong>L'avis de rechercher se recupère en : </strong>{pos}
                </p>
                <p className={classes.PWidth}>
                    <strong>Gains :</strong>{doplon}
                </p>
                <p className={classes.PWidth}>
                    <strong>Description : </strong> {desc}
                </p>
            </div>
        </div>
    );
}

export default MonsterDescription;
