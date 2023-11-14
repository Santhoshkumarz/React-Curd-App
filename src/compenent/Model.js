import React, { useState } from "react";

import "./model.css";

export const Modal = ({ closeModal, onSubmit }) => {
  
  const [formData, setFormState] = useState(
    {
      sno:"",
      name: "",
      college: "",
      dob: "",
      department: "",
      first_sem: "",
      second_sem: "",
      third_sem: "",
      
    }
  );

 
  const handleChange = (e) => {
    setFormState({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    closeModal();
  };



  return (
    <div className="modal-container">
       
      <div className="modals">
      
        <form  > 
        <button className="btnn btn-danger"  onClick={(e) => { closeModal()}}>X</button>
          <div className="form-group">
           
            <label htmlFor="name">Name</label>
            <input autoComplete="off" name="name" onChange={handleChange} value={formData.name} />
          </div>
          <div className="form-group">
            <label htmlFor="college">College</label>
            <input autoComplete="off" name="college" onChange={handleChange} value={formData.college} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">DOB</label>
            <input autoComplete="off" type="date" name="dob" onChange={handleChange} value={formData.dob} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Department</label>
            <input autoComplete="off" type="text" name="department" onChange={handleChange} value={formData.department} />
          </div>
          <div className="form-group">
            <label htmlFor="1st_sem">1st Semester</label>
            <input autoComplete="off" type="number" name="first_sem" onChange={handleChange} value={formData.first_sem} />
          </div>
          <div className="form-group">
            <label htmlFor="2nd_sem">2st Semester</label>
            <input autoComplete="off" type="number" name="second_sem" onChange={handleChange} value={formData.second_sem} />
          </div>
          <div className="form-group">
            <label htmlFor="3rd_sem">3st Semester</label>
            <input autoComplete="off"
             type="number" name="third_sem" onChange={handleChange} value={formData.third_sem} />
          </div>
     

          <button type="submit" className="btnf" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
