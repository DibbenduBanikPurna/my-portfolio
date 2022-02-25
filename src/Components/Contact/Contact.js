import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
//import Footer from '../Footer/Footer';
const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ebieg2k', 'template_5gz6o2z', e.target, 'user_9Bd2QAgonb6gDRkHll4e9')
      .then((result) => {
        console.log(result.text);
        alert("Message send successfully")
      }, (error) => {
        console.log(error.text);
        alert("something error!")
      });
  }


  return (
    <section className="Contact">
      <h3 className="pt-5 text-light">Contact Me</h3>
      <br />
      <div className="row">
        <div className="col-md-5 m-auto">


          <form className="form-box" onSubmit={sendEmail}>

            <input placeholder="name" className="form-control " type="name" name="user_name" />

            <input placeholder="email" className="form-control mt-2 " type="email" name="email" />



            <textarea cols="10" rows="8" placeholder="Enter text" className="form-control mt-2 " name="message" />

            <input className="btn btn-outline-warning form-control btn-lg mt-2" type="submit" value="Send" />
          </form>
        </div>

      </div>





    </section>

  );
};

export default Contact;