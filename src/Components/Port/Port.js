
import React, { useState } from 'react';
import { PortData } from '../Data/Data';

import './Port.css'
const Port = () => {
    const [data] = useState(PortData)


    return (
        <section className="Port">
            <div className="container">
                <div className="row pb-4 text-light">
                    <h2 className="mt-4">Let,s See My Work</h2>
                    {
                        data.map(data => {
                            return <div className="col-md-4 mt-5">
                                <div data-aos="zoom-in-right">
                                    <div className="card ">
                                        <div className="box">

                                            <img className="img-fluid " style={{ height: '200px' }} src={require(`../../images/${data.pic}`).default} alt="" />
                                        </div>

                                        <div className=" boxes">

                                            <button className="btn btn-light m-3"><a rel="noreferrer" target="_blank" href={data.link}>Live</a></button>

                                            < button className="btn btn-light"> <a rel="noreferrer" target="_blank" href={data.gitLink}>Code</a></button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>


            </div>
        </section>
    );
};

export default Port;