import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

import HeaderComponents from './components/HeaderComponents/HeaderComponents';
import IntroComponents from './components/IntroComponents/IntroComponents';
import ImgComponents from './components/ImgComponents/ImgComponents';


function App() {
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [explanation, setExplanation] = useState();

  useEffect (() => {
    Axios
    .get('https://api.nasa.gov/planetary/apod?api_key=fTWg0sqUT6HKcISSwqihXJhkFf2gCViREEyN8TbD')
    .then(response =>{
      console.log(response);

      setImg(response.data.url);
      setTitle(response.data.title);
      setDate(response.data.date);
      setExplanation(response.data.explanation);
    })
    .catch(error =>
      console.log(error)
      )
  },[]);
  return (
    <div>
      <HeaderComponents />
      <IntroComponents title = {title} date = {date} explanation = {explanation} />
      <ImgComponents url = {img} />
    </div>
  );
}

export default App;
