import React from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const {
        register,
        handleSubmit,
      
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data,e) => {
        alert(JSON.stringify(data));
        e.preventDefault()
      }; 

    return (
        <div className="container">
            <div className="col-md-4 m-auto">

           
             <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <label> Name</label>
      <input className="form-control" placeholder="Enter Name"
        {...register("firstName", {
          required: true,
          maxLength: 20,
          
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>Name field is required</p>}
     
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <br/>
      <label>Email</label>
      <input type="email" placeholder="Email"  className="form-control" {...register("email", {required:true, })} />
      {errors?.email?.type === "required" && <p>email field is required</p>}
        <br/>
        <label>Message</label>
      <input className="form-control"  type="text-area" placeholder="Enter Text">

      </input>
      <br/>
      
    
      <input   type="submit" />
    </form>
    </div>
        </div>
    );
};

export default Contact;