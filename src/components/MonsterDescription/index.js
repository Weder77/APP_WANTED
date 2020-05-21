import React from 'react';
import { style } from './style';

const MonsterDescription = ({pos}) => {
    const classes = style();

    return (
        <div className={classes.secondBox}>
            <h2 className={classes.title}>Sorts, description et astuces</h2>
            <div className={classes.sorts}>
                <p>
                    <span className={classes.bold}>L'avis de rechercher se recupère en : </span>{pos}
                </p>
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
    );
}

export default MonsterDescription;
