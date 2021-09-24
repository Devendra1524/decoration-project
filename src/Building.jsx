import React from "react";
import data from "./data/test_units_data.json"



import { NavLink } from "react-router-dom";


const About = () => {
  return (
    
    <>

    
    {data.map((tdata, index)=>{
      return<div> 
      <p>{tdata.uniqueID}</p>
      <p>{tdata.availability}</p> 
      <p>{tdata.bedroom}</p>
      <p>{tdata.view}</p>
      <p>{tdata.floor}</p>
      <p>{tdata.price}</p>
      <p>{tdata.direction}</p>
      </div>
    })}


    </>
  );
};

export default About;
