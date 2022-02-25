import React from 'react';
import Purna from '../../images/background.jpg'
import './About.css'
const About = () => {
    return (
        <section className="About">
            <div className="container">


                <div className="row">
                    <div className="col-md-4 mt-3 pt-5 text-light" style={{ textAlign: 'justify' }}>
                        <div data-aos="flip-left">
                            <div className="d-flex justify-content-between">



                                <img src={Purna} className="pic  thumbnail rounded" alt="" />

                                <div className="text">


                                    <p>Name: Dibbendu Banik Purna</p>
                                    <p>Profile: Web Developer</p>
                                    <p>Email: purna.banik164487@gmail.com</p>
                                    <p>Phone: 01777332208</p>
                                </div>


                            </div>


                            <div>
                                <h3>I,am Dibbendu Banik Purna</h3>
                                <p>I'm a  web designer and developer.I believe in hard work.I always try to update myself with learn new technology.I like to earn knowledge from goggle and you tube also</p>
                            </div>
                        </div>
                        <div className="mt-2 p-5 ">

                            <h5>Contact With Me</h5>
                            <button className="btn btn-primary m-2 pt-2"> <a className="text-light ml-2" href="https://www.facebook.com/purno.banik.79" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f text-light"></i></a></button>
                            <button className="btn btn-primary m-2 pt-2"> <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/dibbendu-banik-purna-003007229/"><i className="fab fa-linkedin-in text-light"></i></a></button>
                            <button className="btn btn-primary   m-2 pt-2" > <a rel="noreferrer" target="_blank" href="https://www.instagram.com/purnobanik/"><i class="fab fa-instagram-square text-light"></i></a></button>

                        </div>


                    </div>

                    <div className="col-md-6 mx-auto  pt-5  text-light " style={{ textAlign: 'justify' }}>
                        <div data-aos="zoom-in-left">
                            <div>
                                <h4>Front-End</h4>
                                <button className='btn btn-dark m-1'>HTML</button>
                                <button className='btn btn-dark m-1'>CSS</button>
                                <button className='btn btn-dark m-1'>BOOTSTRAP</button>
                                <button className='btn btn-dark m-1'>MATERIAL UI</button>
                                <button className='btn btn-dark m-1'>JAVASCRIPT</button>
                                <button className='btn btn-dark m-1'>ES6</button>

                            </div>
                            <div className="mt-3">
                                <h4>Back-end</h4>
                                <button className='btn btn-dark'>NODE-JS</button>
                                <button className='btn btn-dark'>EXPRESS-JS</button>
                                <button className='btn btn-dark'>MONGODB</button>
                                <button className='btn btn-dark'>MYSQL</button>
                                <button className='btn btn-dark'>FIREBASE</button>
                            </div>
                            <div className="mt-3">
                                <h4>Tools</h4>
                                <button className='btn btn-dark'>FIREBASE</button>
                                <button className='btn btn-dark'>VS CODE</button>
                                <button className='btn btn-dark'>CHORME DEV TOOL</button>
                                <button className='btn btn-dark'>HEROKU</button>
                                <button className='btn btn-dark'>NETLIFY</button>
                            </div>
                            <div className="mt-3">
                                <h4>Version control</h4>
                                <button className='btn btn-dark'>GITHUB</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;