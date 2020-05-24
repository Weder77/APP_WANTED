import React from 'react';

const ApiCall = (param) => {
    const [result, setResult] = React.useState([]);
    let url = "http://localhost:8000" + param

    fetch(url, {
            method: 'get',
            headers: new Headers({
                'Accept': 'application/json'
            })
        })
        .then(resp => resp.json())
        .then(
            (res) => {
                setResult(res)
            }
        )

    return result
}

export default ApiCall;