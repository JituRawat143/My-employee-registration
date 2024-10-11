
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
        <div className="container mt-5">
        <h2 className="mb-4">Employee Data</h2>
        <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
            <table className="table table-bordered table-striped">
                <thead className="table-primary text-center align-middle">
                        <tr>
                            <th>S.NO.</th>
                            <th>ID</th>
                            <th>Name</th>
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
                            <tr key={employee.id} className="text-center align-middle">
                                <td>{index + 1}</td>
                                <td>{employee.id}</td>
                                <td style={{ whiteSpace: "nowrap" }}>{`${employee.FirstName} ${employee.LastName}`}</td>
                                <td>{employee.age}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.title}</td>
                                <td>{employee.department}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.joiningYear}</td>
                                <td>
                                    <div className="d-flex">
                                        <button
                                            className="btn btn-sm btn-info me-2"
                                            onClick={() => handleEdit(employee)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(employee.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
    );
};

export default Employeedata;