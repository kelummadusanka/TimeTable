import React from "react";
import './start_page.css'

export default function Start_page() {
      return (
        <div>
          <div className="container-fluid my-container01in">
            <div className="row my-row1">
              <p>
                <a href="./Login">
                  <font color="white"> You are not logged in (Login)</font>
                </a>
              </p>
            </div>
            <div className="row my-row2">
              <div className="col-md-1 my-col1">
                <div className="imentr2">
                  <img
                    src={require('./img/logoeng.jfif')}
                    align="center"
                    className="img-fluid rounded"
                    alt="html-index1"
                  />
                </div>
              </div>
              <div className="col-md-7 my-col1">
                <p className="introin1" align='center'>
                  <b>TIMETABLE MANAGEMENT SYSTEM</b>
                </p>
              </div>
              <div className="col-md-4 my-coli2">
                <div id="list3">
                  <ul>
                    <li>
                      <a href>
                        <p className="list2">Home </p>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <p className="list2">Timetables </p>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <p className="list2">Notifications </p>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <p className="list2">Contact </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-row3">
              <div className="col-md-7 my-coli2">
                <div className="introi1">
                  <p className="intro1">Welcome</p>
                  <p className="intro4">Timetable Management System</p>
                  <p className="intro2">Faculty of Engineering</p>
                  <p className="intro3">University of Ruhuna</p>
                </div>
                <div className="imentr1">
                  <img
                    src={require("./img/ttms2.png")}
                    className="img-fluid rounded"
                    alt="html-index1"
                    align='justify'
                  />
                </div>
              </div>
              <div className="col-md-5 my-coli2">
                <div id="info1">
                  <p className="infoh1">Courses</p>
                  <button
                    className="btn btn-secondary dropdown-toggle buttonin2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Undergraduate
                  </button>
                  <button type="button" className="btn btn-warning buttonin1">
                    <p className="dep1">
                      Department of Civil and Environmental Engineering
                    </p>
                  </button>
                  <button type="button" className="btn btn-warning buttonin1">
                    <p className="dep1">
                      Department of Electrical and Information Engineering
                    </p>
                  </button>
                  <button type="button" className="btn btn-warning buttonin1">
                    <p className="dep1">
                      Department of Mechanical and Manufacturing Engineering
                    </p>
                  </button>
                  <button type="button" className="btn btn-warning buttonin1">
                    <p className="dep1">First Year</p>
                  </button>
                  <button
                    className="btn btn-secondary dropdown-toggle buttonin2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Postgraduate
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-row4">
              <p className="login1" />
            </div>
          </div>
          <hr />
          <p className="footer" align='center'>All rights received</p>
        </div>
      );
}
