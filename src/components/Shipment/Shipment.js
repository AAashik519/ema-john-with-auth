import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
       const savedCart= getDatabaseCart()
      const orderDetails = {...loggedInUser, produts:savedCart,shipment : data, orderTime: new Date() };
      

      
      fetch('http://localhost:8000/addOrder',{
        method :'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(orderDetails)
      })

      .then(res => res.json())
       .then(data => {
         if(data){
           alert(' your order placed sussessfully')
         }
       })
        
  }
 

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}
     
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
      {errors.email && <span className="error">Email is required</span>}
     
      <input name="address" ref={register({ required: true })}  placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}
     
      <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
      {errors.phone && <span className="error">Phone Number is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;