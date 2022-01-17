import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Products= (props) => {
   

  return (
    <div className="container">
      <h1>User Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={userForm.username}
            onChange={(e) => handleChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div>
            <small className="text-danger">{userFormErrors.usernameErr}</small>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            className={`form-control ${
              userFormErrors.jobTitleErr ? "border-danger" : ""
            }`}
            placeholder="Job title"
            onChange={(e) => handleChange(e)}
            value={userForm.jobTitle}
            id="exampleInputPassword1"
          />
        </div>
        <small className="text-danger">{userFormErrors.jobTitleErr}</small>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Products;
