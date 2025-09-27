import React, { useState } from "react";

function EmployeeList({ employees, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", position: "" });

  const handleEdit = (emp) => {
    setEditingId(emp.id);
    setForm(emp);
  };

  const handleUpdate = () => {
    onUpdate(editingId, form);
    setEditingId(null);
    setForm({ name: "", email: "", position: "" });
  };

  return (
    <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            {editingId === emp.id ? (
              <>
                <td>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    value={form.position}
                    onChange={(e) =>
                      setForm({ ...form, position: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>
                  <button onClick={() => handleEdit(emp)}>Edit</button>
                  <button onClick={() => onDelete(emp.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
