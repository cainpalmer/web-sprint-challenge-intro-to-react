
// Imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

// App
const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

// Return
  return (
    <div className = "App">
      <h1 className = "Header">Characters</h1>
      <Character className = "Characters" characters = {characters} />
    </div>
  );
}

// Exports
export default App;
