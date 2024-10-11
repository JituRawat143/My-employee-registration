import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './emploSlice'; 
import { useNavigate } from 'react-router-dom';

const Employeedata = () => {
    const employees = useSelector((state) => state.employeeData.employeeStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (employee) => {
        
        navigate('/edit', { state: { employee } });
    };

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    return (
        <div>
            <h2>Employee Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Joining Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.id}</td>
                            <td>{employee.FirstName}</td>
                            <td>{employee.LastName}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.title}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.joiningYear}</td>
                            <td>
                                <button onClick={() => handleEdit(employee)}>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employeedata;
