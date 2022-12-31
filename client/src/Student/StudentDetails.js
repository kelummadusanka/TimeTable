import React from "react";

const StudentDetails = ({Student}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="display-5 mb-5">STUDENT DETAILS</h1>
      </div>
      <div className="row">
        <div className="col">{/* Empty */}</div>
        <div className="col p-3 d-flex justify-content-center">
          <div className="card " style={{ width: "18rem" }}>
            <img
              className="card-img-top "
              src={require("../Images/avatar-dummy.png")}
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <div className="row container px-5">
		<div className="col gy-5">
          <div className="row">
            <p className="student-data">Name</p>
          </div>
          <div className="row">
            <p className="student-data">Email</p>
          </div>
          <div className="row">
            <p className="student-data">Semester</p>
          </div>
          <div className="row">
            <p className="student-data">No. of Modules</p>
          </div>
          <div className="row">
            <p className="student-data">Reg No.</p>
          </div>
          <div className="row">
            <p className="student-data">Department</p>
          </div>
        </div>

        <div className="col  gy-5">
          <div className="row">
            <p className="student-data">{Student.Name}</p>
          </div>
          <div className="row">
            <p className="student-data">{Student.Email}</p>
          </div>
          <div className="row">
            <p className="student-data">{Student.Semester}</p>
          </div>
          <div className="row">
            <p className="student-data">{Student.No_of_Modules}</p>
          </div>
          <div className="row">
            <p className="student-data">{Student.Reg_No}</p>
          </div>
          <div className="row">
            <p className="student-data">{Student.department}</p>
          </div>

		</div>
      </div>
      <div className="row container mt-5">
        <div className="col ">
          <button className="btn btn-outline-secondary rounded-0 px-5 col mx-auto">
            Back
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-secondary rounded-0 px-5 col mx-auto">
            Edit
          </button>
        </div>
        <div className="col">
          <button className="btn btn-outline-secondary rounded-0 px-5 col mx-auto">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
