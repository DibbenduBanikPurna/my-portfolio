import React, { useState } from 'react';
import { Data } from '../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Services = () => {
    const [data]=useState(Data)
    return (
        <section className="container">

   
        <div className="row  mt-5 pt-5">
            <h1 className="mt-4">MY SERVICES</h1>
            <br/>
            {
                data.map((data)=>{
                    return   <div className="col-md-3 mt-5">
                    
                        <div className="card  p-4">
                        <FontAwesomeIcon className="font m-auto" icon={data.icon}/>
                            <div className="card-body cards ">
                                <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            </div>
                        </div>
                            
                    </div>
                })
            }
          
            
        </div>
        </section>
    );
};

export default Services;