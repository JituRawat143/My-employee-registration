import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../Pics/p-m-2.png';
 

function LoginPage() {  
  const superadmin = {
    id: "jitu143@gmail.com",
    pass: "1234",
  };

  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value,   
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id === superadmin.id && formData.password === superadmin.pass) {
      navigate('/MainEmployee');
    } else {
      alert("User ID or password is incorrect");
      setFormData({
        id: "",
        password: "",
      });
    }
  };

  return (
    <div className='w-100 h-100' style={{ backgroundColor: "rgba(180,250,253,255)" }}>
      <div className="container-fluid d-flex flex-row align-items-center justify-content-center min-vh-100">
        <div className="row w-100 row-cols-sm-1">
          <div className='col col-12 col-lg-5 col-md-4 col-sm-12 d-flex justify-content-center align-self-center'>
            <div className="login-container bg-white p-3 pt-4 col-12 col-sm-12 pb-4 col-lg-8 col-md-11">
              <div className='d-flex align-items-center justify-content-center pb-2'>
                <nav aria-label="...">
                  <ul className=" pagination-lg heading" style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                    <li className="page-item">
                      <h2>User</h2>
                    </li>
                    
                  </ul>
                </nav>
              </div>

              <h4>Login</h4>
              <p className="form-text">Don't have an account yet? <a href="#e">Sign Up</a></p>
              <form onSubmit={handleSubmit}>
                <div className="form-group text-left">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control"
                    id="email"
                    name="id"
                    placeholder="Enter email or phone"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group text-left">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <small className="form-text text-right"><a href="#">Forgot Password?</a></small>
                </div>
                <div className="form-group form-check text-left">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <div className='pt-3'>
                  <button type="submit" className="btn button1 btn-primary">LOGIN</button>
                </div>
              </form>
            </div>
          </div>

          <div className='col d-flex flex-wrap justify-content-center align-self-center col-lg-7 col-md-8'>
            <img className='pics' src={img1} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
