import React, { useState } from 'react';
import './UserDetails.css';
const DeliveryServiceForm = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send the data to your backend.
    console.log('Submitted data:', { name, mobileNumber, address });
    // You can also reset the form fields after submission if needed.
    setName('');
    setMobileNumber('');
    setAddress('');
  };

  return (
    <div className="delivery-service-card">
      <h2 className="delivery-service-heading">Hello! We're delighted to offer you our delivery service. If you're interested, we'd love to hear from you and make sure we get everything just right. Could you please share your details with us?. Thank you for choosing us!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
        <button   type="submit" className="submit-button ">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryServiceForm;
