import React, { useState } from 'react'
import "../App.css"
import { MdOutlineClose } from "react-icons/md";

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!rest.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!rest.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(rest.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!rest.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(rest.mobile)) {
      newErrors.mobile = "Invalid mobile number (should be 10 digits)";
    }
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      handleSubmit(e); // Proceed to submit if no validation errors
    } else {
      setErrors(formErrors); // Set validation errors
    }
  };

  return (
    <div className="addContainer">
      <form onSubmit={handleFormSubmit}>
        <div className="close-btn" onClick={handleclose}><MdOutlineClose /></div>
        
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="mobile">Mobile :</label>
        <input type="text" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} />
        {errors.mobile && <p className="error-message">{errors.mobile}</p>}

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Formtable;
