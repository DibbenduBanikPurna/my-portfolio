
import React, { useState } from 'react';
import { PortData } from '../Data/Data';
//import Model from './Model';

const Port = () => {
    const [data]=useState(PortData)
   
   
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(data=>{
                        return  <div className="col-md-4 mt-5">
                            <div className="card">
                                
                                <img className="img-fluid" style={{height:'200px'}} src={require(`../../images/${data.pic}`).default} alt=""/>
                                <div className="card-body">
                                    <h5>{data.title}</h5>
                                    <a style={{color:'tomato'}} rel="noreferrer" target="_blank" href={data.link}>Live Server Link:{data.link}</a>
                                    <br/>
                                    <a rel="noreferrer" target="_blank" href={data.gitLink}>Git_hub_link:{data.gitLink}</a>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    })
                }
               
            </div>
          
            
        </div>
    );
};

export default Port;