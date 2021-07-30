import React from 'react';
//import { ProgressBar } from 'react-bootstrap';
import Mern from '../../images/mern.jpg'
const Work = () => {
    return (
        <section className=" work">
            <div className="row">
                <h2>I AM MERN STACK DEVELOPER</h2>
                <div className="col-md-6 pt-5 mt-5">
                    <img className="img-fluid" src={Mern} alt=""/>
                </div>

                <div className="col-md-6 pt-5">
                    <p>My KNOWLEDGE</p>
                    <h5>HTML_5</h5>
                    <div class="progress">
                    <div class="progress-bar progress-bar-animated progress-bar-striped bg-primary" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">92%</div>
                   
                        </div>
                        <br/>
                        <h5>CSS_3</h5>
                    <div class="progress">
                <div class="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="50"   aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
                    <br/>
                    <h5>BOOTSTRAP_4</h5>
                    <div class="progress">
               <div class="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar" style={{width: "95%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">95%</div>
             </div>
             <br/>
             <h5>MATERIAL_UI</h5>
            <div class="progress">
             <div class="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style={{width: "60%"}}aria-valuenow="100"    aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
            <br/>
            <h5>REACT_JS</h5>
            <div class="progress">
             <div class="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar" style={{width: "80%"}}aria-valuenow="100"    aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            <br/>
            <h5>NODE_JS</h5>
            <div class="progress">
             <div class="progress-bar progress-bar-animated progress-bar-striped bg-warning" role="progressbar" style={{width: "60%"}}aria-valuenow="100"    aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
            <br/>
            <h5>FIREBASE</h5>
            <div class="progress">
             <div class="progress-bar progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" style={{width: "65%"}}aria-valuenow="100"    aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
                    </div>
                </div>
          
    
              
     
       

  
     
  
      
      
      
        </section>
    );
};

export default Work;