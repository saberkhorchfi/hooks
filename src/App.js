import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  const[list,setlist]=useState([
    {name:"Game of thrones",rate:5,img:"https://wallpapercave.com/wp/wp4355108.jpg"},
    {name:" Vikings",rate:4.5,img:"https://www.happy-landing.net/wp-content/uploads/2020/12/Vikings-Valhalla.png"},
    {name:"Titanic",rate:4,img:"https://www.pixelstalk.net/wp-content/uploads/images1/Titanic-Wallpapers-HD-768x480.jpg"},
  ])
 
  const p=useRef()
  const p2=useRef()
  const p3=useRef()
  
  
  const add=()=>{
    setlist([...list,
      {
    
    name:p.current.value,
    rate:p2.current.value,
    img:p3.current.value
    
    

  } 

  ])
}
  

  return (
    <>
    
    <input type={"text"} ref={p} placeholder='Name Movie'></input>
    <input type={"text"} ref={p2} placeholder='Rate Movie'></input>
    <input type={"text"} ref={p3} placeholder='Image Movie'></input>
    <button onClick={add}>add</button>
    <br></br>
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",padding:"20px   "}}>
    {list.map(e=>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={e.img} />
       <Card.Body>
         <Card.Title>{e.name}</Card.Title>
         <Card.Text>
            {e.rate}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>)}

    </div>

    </>

  );
}

export default App;
