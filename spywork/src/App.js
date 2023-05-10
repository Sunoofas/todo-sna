
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Todo from './components/Todo';
import Mentors from './components/Mentors';
import Contact from './components/Contact';
import {  Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';


function App() {

  // const [message, setMessage] = useState("");
  // useEffect(()=>{
  //   fetch("http://localhost:8000/message")
  //     .then((res) =>res.json())
  //     .then((data) =>setMessage(data.message));
  // },[]);
  return (
    
    <div className="App">
      {/* <h1>{message}</h1> */}
<Navbar />

   
     {/* <img src="pic-two.jpg" width="100%" height="20%"></img> */}
    

      <Routes> 
         <Route path="/" element={<Home/>} />
         <Route path='/todo' element= {<Todo/>}/>
         <Route path='/mentors' element={<Mentors/>}/>
         <Route path='/contact' element={<Contact/>}/>
       
       </Routes>
  
    </div>
  
  );
}

export default App;
