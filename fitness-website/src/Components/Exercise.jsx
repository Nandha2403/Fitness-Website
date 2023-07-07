import React from "react";
import "../Styles/exercise.css";
import lunges from "../assets/img/lunges.png";
import yoga from "../assets/img/yoga-pose.png";
import extended from "../assets/img/extended.png";

const Exercise = () => {
  return (
    <section id="exercise">
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section-title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ab,
            quis. Accusamus vel quibusdam eligendi iste.
          </p>
        </div>
        {/*  */}
        <div className="exercise_wrapper">
          <div className="exercise_item" data-aos='Zoom-in' data-aos-duration='1500'>
            <span className="exercise_icon">
              <img src={lunges} alt="lunges" />
            </span>
            <div className="exercise_content">
              <h4 style={{ fontWeight: "bold" }}>Healty Life</h4>
              <p>
                Lorem ipsum dolor sit adipisicing <br /> elit.
                Eligendi est magnam eaque quos incidunt?
              </p>
            </div>
          </div>
          <div className="exercise_item" data-aos='Zoom-in' data-aos-duration='1500'>
            <span className="exercise_icon">
              <img src={yoga} alt="lunges" />
            </span>
            <div className="exercise_content">
              <h4 style={{ fontWeight: "bold" }}>Increased Flexibility</h4>
              <p>
                Lorem ipsum dolor sit adipisicing <br /> elit.
                 magnam eaque quos incidunt?
              </p>
            </div>
          </div>
          <div className="exercise_item" data-aos='Zoom-in' data-aos-duration='1500'>
            <span className="exercise_icon">
              <img src={extended} alt="lunges" />
            </span>
            <div className="exercise_content">
              <h4 style={{ fontWeight: "bold" }}>Reducing Blood Pressure</h4>
              <p>
                Lorem ipsum dolor sit adipisicing <br /> elit.
                Eligendi est magnam eaque quos incidunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
