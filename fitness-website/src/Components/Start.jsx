import React from 'react'
import "../Styles/start.css"
import trainerImg from "../assets/img/trainer.png"

const Start = () => {
  return (
    <section>
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainerImg} alt="trainer"  data-aos='fade-left' data-aos-duration='1500'/>
                </div>
                <div className="start_content" data-aos='fade-right' data-aos-duration='1500'>
                    <h2 className="section_title">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta, dolorum, officiis dicta veritatis iste expedita blanditiis in assumenda, temporibus ipsam quibusdam reprehenderit saepe ipsum cumque quaerat quia ducimus quisquam?</p>

                    <button className='register_btn'>Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start