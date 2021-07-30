import React from 'react';
import Purna from '../../images/background.jpg'
const About = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={Purna} className="img-fluid thumbnail rounded-circle" alt=""/>
            </div>
            <div className="col-md-6">
                    <h1 className="text-warning">ABOUT ME</h1>
                <p>`Hello I am Purna, I have been developing websites for over 2 years.I am Fullstack web developer.
                    Technologies I use is MERN(Mongodb, Express, React, Node-js)
                    I create responsive websites that are displayed in all devices.I also can create buisness card and t-shirt design
                    with Graphics design.I can build website with c# ASP DOT NET CORE also`
                </p>
            </div>
        </div>
    );
};

export default About;