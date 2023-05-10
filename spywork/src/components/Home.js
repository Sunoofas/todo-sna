import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Home.css";
import bannerImage from "./assets/nsg12.jpg";
export default function Home(){
   return(
     <div className="homecontent" style={{backgroundImage: `url(${bannerImage})`}}>
        <h1>Welcome to National Security Service</h1>
        <p>Home page body content</p>
        <Link to="/todo">Todo</Link>
      </div>
   )
}

