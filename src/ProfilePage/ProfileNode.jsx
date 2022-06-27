import React, { useState } from 'react'

function ProfileNode() {
    const [returnedData, setReturnedData] = useState(['hi there']);

    const getData = async (url) => {
        const newData = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(res => res.json());
        console.log(newData);
        // console.log(newData.result);
        setReturnedData(newData.result);
    }

    // getData('/api');

    return (
        <div>
            {returnedData}
            <button onClick={() => { returnedData === "Hello" ? getData("/quit") : getData("/api") }}>Quit</button>
        </div>
    )
}

export default ProfileNode