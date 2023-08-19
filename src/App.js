import './App.css';
import { useState } from 'react';



function App() {
  const namesFromDatabase = [
    {id: 1, username: 'Naraa'},
    {id: 2, username: 'Bat'},
    {id: 3, username: 'Saraa'},
    {id: 4, username: 'Oyun'},
    {id: 5, username: 'Hulan'},
    {id: 6, username: 'Erdene'},
    {id: 7, username: 'Jargal'},
    {id: 8, username: 'Anu'},
    {id: 9, username: 'Ganbold'},
    {id: 10, username: 'Herlen'},
    {id: 11, username: 'Nomin'},
    {id: 12, username: 'Shuree'},
    {id: 13, username: 'Togtoh'},
    {id: 14, username: 'Saihanaa'},
  ]  

  const [names, setNames] = useState(namesFromDatabase)

  const filerNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredNames = namesFromDatabase.filter(names => names.username.toLocaleLowerCase().includes(search))
    setNames(filteredNames)
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Username</h2>
        <hr/>
        <input type="text" onChange={(e) => filerNames(e)} />
        <button>Search</button>
        <ul>
          {names.map(name => {
            return <li key={name.id}> {name.username}</li>
          })}
        </ul>
      </header>

    </div>
  )
  
}

export default App;