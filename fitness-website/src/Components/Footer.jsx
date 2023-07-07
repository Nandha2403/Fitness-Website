import React from 'react'
import "../Styles/footer.css"
import logo from "../assets/img/dumble.png"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer' data-aos='fade-up' data-aos-duration='1500'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="log">
                        <h2 style={{fontWeight:"800"}}>Fitness Club</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nam vitae, dolorem nobis qui porro debitis iure facilis tempora est neque eos? Et id aut ratione ad praesentium excepturi voluptates.
                    </p>
                </div>

                <div className="footer_box">
                    <h4 style={{fontWeight:"bold"}} className="footer_title">Company</h4>
                    <ul className="footer_links">
                        <li><a href="#">Our Program</a></li>
                        <li><a href="#">Our Plan</a></li>
                        <li><a href="#">Become a Member</a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>

                <div className="footer_box">
                    <h4 style={{fontWeight:"bold"}} className="footer_title">Quick Links</h4>
                    <ul className="footer_links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Become a Member</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer_box">
                    <h4 style={{fontWeight:"bold"}} className="footer_title">Quick Links</h4>
                    <ul className="footer_links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Become a Member</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyrights - {year} developed by Nandha. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer