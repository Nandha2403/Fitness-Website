import React from "react";
import '../Styles/hero.css'
import { Button } from "@chakra-ui/react";
import heroImg from "../assets/img/gym-02.png"
import dumbelIcon from "../assets/img/dumble.png"

const Hero = () => {
  return (
    <section id="Hero">
      <div className="container">
        <div className="hero_wrapper">
          {/*  */}
          <div className="hero_content">
            <h2 className="section_title" data-aos='fade-up' data-aos-duration='1500' >Exercise is the key to a <span className="highlights"> Healthy</span> Lifestyle</h2>
            <p data-aos='fade-up' data-aos-delay='100' data-aos-duration='1800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Laudantium corrupti eaque blanditiis laboriosam tenetur maxime.
            </p>

            <div className="hero_btns" data-aos='fade-up' data-aos-delay='200' data-aos-duration='2000'>
              <button className="register_btn">Get Started</button>
              <button className="watch_btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          {/*  */}
          <div className="hero_img">
            <div className="hero_img_wrapper">
                <div className="box-01">
                    <div className="box-02">
                        <div className="box-03">
                            <div className="box_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="heart_rate" data-aos='fade-right' data-aos-delay='100' data-aos-duration='1800'>
            <h5>Heart Rate</h5>
            <span><i class="ri-heart-pulse-fill"></i></span>
            <h5>2457 BPM</h5>
        </div>
        <div className="gym_location" data-aos='fade-left' data-aos-delay='100' data-aos-duration='1800'>
            <span><i class="ri-map-pin-fill"></i></span>
            <h5>Find a new <br />gym near you</h5>
        </div>

        <div className="dumbel_icon" data-aos='fade-down' data-aos-delay='100' data-aos-duration='1800'>
            <img src={dumbelIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
