import React from 'react'

//with jsx
const title = <h1>Hello React js</h1>

//const title = React.createElement("h1", null, 'React')

const list = (
    <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
    </ul>
)
function App() {
    return <div className="App">{title} {list} {10+5}</div>
}

export default App
