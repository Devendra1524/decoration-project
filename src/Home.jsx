import React from "react";
//import web from "../src/images/Home.jpeg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Home Decoration "
        //imgsrc={web}
        visit="/Gallery"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
