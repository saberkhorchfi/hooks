import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[list,setlist]=useState([
    {name:"Game of thrones",rate:5,img:"https://wallpapercave.com/wp/wp4355108.jpg"},
    {name:" Vikings",rate:4.5,img:"https://www.happy-landing.net/wp-content/uploads/2020/12/Vikings-Valhalla.png"},
    {name:"Titanic",rate:4,img:"https://www.pixelstalk.net/wp-content/uploads/images1/Titanic-Wallpapers-HD-768x480.jpg"},
  ])
  return (
    <>
    <input placeholder='Enter your search'></input>

    </>

  );
}

export default App;
