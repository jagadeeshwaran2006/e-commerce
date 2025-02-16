import React from "react";
import "./Project.css";
import rjlogo from './Images/rjlogo.png';

function Heading(){
    
return(
    <>
    <img class = "logo" src={rjlogo} alt="Logo"></img> 
    <span class = "header"><h1>RJ Shopping Mart</h1></span>       
    </>
)
} export default Heading;