import React, { useState } from 'react'

const State = () => {
    var [name, setName] = useState("ramu");
    return (
        <div>
            <h1>Hello Mr:{name}</h1>
        </div>
    )
}

export default State
