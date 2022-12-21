import './App.css';
import axios from 'axios'
import React, { useState  } from 'react';



function App() {

  const [ joke, setJoke ] = useState("")

  async function getJoke() {
    const urlAPI = 'https://api.chucknorris.io/jokes/random' 
    axios.request(urlAPI)
    .then(response => setJoke(response.data.value))
    .catch(error => console.log(error));
  }

  return (
    <div className="App">

<div className="card container" >
  <div className="card-body">
    <h2 className="card-title">Chuck Norris Jokes!</h2>
    <p className="card-text"> {joke}</p>
  </div>
</div>
   

      <button type="button" className="btn btn-info btn-lg " onClick={()=> {
        getJoke();
      } }>
        Jokes!
      </button>


    </div>
  );
}

export default App;
