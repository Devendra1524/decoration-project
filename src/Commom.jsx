import React from "react";
//import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> </strong>
                  </h1>
                  <h2 className="my-3 mr4">All we know</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  {/* <img
                    src={props.imgsrc}
                    className=""
                    alt="Commom img"
                  /> */}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Tq8RBFS8OqI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
