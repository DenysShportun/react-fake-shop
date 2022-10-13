import React from 'react'
//React Element

//with jsx
//const title = <h1>Hello React js</h1>

//const title = React.createElement("h1", null, 'React')

//React component
const Title = () => <h1>Hello React component</h1>
const List = () => {
    let a = 10
    return (
        <ul>
            <li>list 1 {a + 1}</li>
            <li>list 2</li>
            <li>list 3</li>
        </ul>
    )
}
function App() {
    return (
        <div className="App">
            <Title /> <List /> {10 + 5}
        </div>
    )
}

export default App
