// src/loginAndRegistration/MainEmployee.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee } from './emploSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

const MainEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const location = useLocation();
    const employeeData = location.state?.employee;

    const [formData, setFormData] = useState({
        id: '',
        FirstName: '',
        LastName: '',
        age: '',
        gender: 'Male',
        title: '',
        department: '',
        salary: '',
        joiningYear: '',
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (employeeData) {
            setFormData(employeeData);
            setIsEditing(true);
        }
    }, [employeeData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(updateEmployee(formData));
        } else {
            dispatch(addEmployee({ ...formData, id: Date.now() }));
        }
        setFormData({
            id: '',
            FirstName: '',
            LastName: '',
            age: '',
            gender: 'Male',
            title: '',
            department: '',
            salary: '',
            joiningYear: '',
        });
        setIsEditing(false);
       
    };

    const handleViewEmployees = () => {
        navigate('/employeedata');
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 2,
                maxWidth: 800,
                margin: '0 auto',
                backgroundColor: '#f5f5f5', // Light background color
                boxShadow: 3, // Adds a subtle shadow
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
                {isEditing ? 'Edit Employee' : 'Add Employee'}
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="FirstName"
                            placeholder="Enter First Name"
                            value={formData.FirstName}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }} // White background for inputs
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="LastName"
                            placeholder="Enter Last Name"
                            value={formData.LastName}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Age"
                            name="age"
                            type="number"
                            placeholder="Enter Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <FormControl fullWidth required margin="normal">
                            <InputLabel>Gender</InputLabel>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Job Title"
                            name="title"
                            placeholder="Enter Job Title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            placeholder="Enter Department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Salary"
                            name="salary"
                            type="number"
                            placeholder="Enter Salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                    <Box sx={{ flex: '1 1 45%' }}>
                        <TextField
                            fullWidth
                            label="Joining Year"
                            name="joiningYear"
                            type="number"
                            placeholder="Enter Joining Year"
                            value={formData.joiningYear}
                            onChange={handleChange}
                            required
                            margin="normal"
                            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                        />
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    sx={{
                        marginTop: 2,
                        backgroundColor: '#1976d2',
                        '&:hover': {
                            backgroundColor: '#155a8a', 
                        },
                    }}
                >
                    {isEditing ? 'Update Employee' : 'Add Employee'}
                </Button>
            </form>
            <Button
                onClick={handleViewEmployees}
                variant="outlined"
                sx={{
                    marginTop: 2,
                    color: '#1976d2', // Button text color
                    borderColor: '#1976d2', // Button border color
                    '&:hover': {
                        backgroundColor: '#1976d2', // Button hover background color
                        color: '#fff', // Button hover text color
                    },
                }}
            >
                My Employee
            </Button>
        </Box>
    );
};
export default MainEmployee;
