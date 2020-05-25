import React from 'react';
import ApiCall from '../../components/ApiCall'
import Monsters from '../Monsters'
import CircularProgress from '@material-ui/core/CircularProgress'
import { style } from './style'

const AreaMonsters = ({ req }) => {
    const classes = style()
    
    const tab = ApiCall(req).Monsters

    if (tab !== undefined) {
        return (
            <Monsters request={tab} />
        )
    } else {
        return (
            <div className={classes.loading}>
                <CircularProgress color="secondary" />
            </div>
        )
    }

}

export default AreaMonsters;