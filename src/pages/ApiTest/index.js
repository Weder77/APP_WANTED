import React from 'react';
import ApiCall from '../../components/ApiCall'
import Monsters from '../Monsters'

const AreaMonsters = ({ req }) => {
    const tab = ApiCall(req).Monsters

    if (tab !== undefined) {
        return (
            <Monsters request={tab} />
        )
    } else {
        return (
            "Loading"
        )
    }

}

export default AreaMonsters;