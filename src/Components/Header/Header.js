import React from 'react';
import Purna from '../../images/purna.jpg'
import Typed from 'react-typed';


const Header = () => {
    return (
     
       <section className="header text-light">


            <div className="row">

                <div className="col-md-6 mt-5 pt-5">

                <h3 className="text-warning">WEB DEVELOPMENT <br/><br/>AND WEBSITE PROMOTIONS</h3>
                   <br/>
              <h5 className="text-danger">I am 
      <Typed
       className="text-muted"
          strings={[
              
              ' WEB DESIGNER',
              ' WEB DEVELOPER',
              '  GRAPHICS DESIGNER']}
              typeSpeed={50}
              backSpeed={50}
            
              loop >
             
          </Typed>

          </h5>

                <br/>
                <button className="btn btn-outline-warning">Contact Me</button>
                </div>

                <div className="col-md-3 mt-5 pt-5">

                    <img className="img-fluid thumbnail rounded-circle" src={Purna} alt=""/>
                </div>
            </div>
           

               
              
        </section>
        
    );
};

export default Header;