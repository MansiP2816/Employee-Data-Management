import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees
  const loadEmployees = async () => {
    const res = await axios.get("http://localhost:8080/api/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Add employee
  const addEmployee = async (employee) => {
    await axios.post("http://localhost:8080/api/employees", employee);
    loadEmployees();
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`);
    loadEmployees();
  };

  // Update employee
  const updateEmployee = async (id, updatedEmployee) => {
    await axios.put(`http://localhost:8080/api/employees/${id}`, updatedEmployee);
    loadEmployees();
  };

  return (
    <div className="container">
      <h1>Employee Manager</h1>
      <EmployeeForm onAdd={addEmployee} />
      <EmployeeList
        employees={employees}
        onDelete={deleteEmployee}
        onUpdate={updateEmployee}
      />
    </div>
  );
}

export default App;
