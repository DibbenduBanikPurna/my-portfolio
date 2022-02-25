import React from 'react';
import Purna from '../../images/purna.jpg'
import Typed from 'react-typed';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (

        <section className="header text-light">
            <div className='container'>

                <div className="row">

                    <div className="col-md-4 mt-5 pt-5" style={{ textAlign: 'justify' }}>
                        <div data-aos="fade-right">
                            <h6>Hello, I,m </h6>
                            <h4 cassName='display-1'>Dibbendu Banik Purna</h4>

                            <Typed
                                className="text-primary" style={{ fontSize: '25px' }}
                                strings={[

                                    'WEB DEVELOPER',
                                    'MERN STACK DEVELOPER',
                                    'OPEN SOURCE CONTRIBUTOR']}
                                typeSpeed={80}
                                backSpeed={80}

                                loop >

                            </Typed>

                            <p className='mt-2'>I am enjoying this challenge. I always like to learn new technogly. I love javasrcipt. I want to work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>



                            <br />
                            <Link to="/about">
                                <button className="btn btn-warning">About Me</button>
                            </Link>
                            <button className='btn btn-outline-success  m-3'> <a className='text-light' style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/dibbendu-banik-purna-003007229/' rel="noreferrer" target="_blank"> Hire Me </a> </button>
                        </div>
                    </div>

                    <div className="col-md-4 m-auto">
                        <div data-aos="fade-left">
                            <img className="img-fluid thumbnail rounded-circle" src={Purna} alt="" />
                        </div>
                    </div>
                </div>


            </div >

        </section>

    );
};

export default Header;