import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [img, setImg] = useState([]);

  useEffect (() => {
    Axios
    .get('https://api.nasa.gov/planetary/apod?api_key=fTWg0sqUT6HKcISSwqihXJhkFf2gCViREEyN8TbD')
    .then(response =>{
      console.log(response);
    })
    .catch(error =>
      console.log(error)
      )
  },[]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
