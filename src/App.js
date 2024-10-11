import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Indexpage from './components/Indexpage';
import MainEmployee from './loginAndRegistration/MainEmploee';
import EmployeeData from './loginAndRegistration/employeedata';
import LoginPage from './Loginpage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    

     <Router>
      <Routes>
       
        <Route path="/" element={<Mainpage />}>
          <Route path="index" element={<Indexpage />} /> 
          <Route path="/MainEmployee" element={<MainEmployee />}/>
                <Route path="/employeedata" element={<EmployeeData />} />
                <Route path ="/login" element={<LoginPage/>}/>
                <Route path="/edit" element={<MainEmployee />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App