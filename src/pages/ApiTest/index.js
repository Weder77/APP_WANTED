import React from 'react';
import ApiCall from '../../components/ApiCall'

const ApiTest = ({ request }) => {
    let tab = ApiCall(request).Monsters

    for (let i = 0; i < tab.length; i++) {
        const element = tab[i];
    }

    return (
        "test"
    )
}

export default ApiTest;