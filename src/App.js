import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <div><Header/></div>
     <div className='backgroundimg'>
       <div  className="home" >
         <h1 className="hometext">Reserve Room <br/> for Family Vacation</h1>
         <br/>
         <Link to="/hotels"><button className='b'> Book now </button></Link> 
       </div>
       </div>

     <div><Footer/></div>
    </div>
  );
}

export default App;
