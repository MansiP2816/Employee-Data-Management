import React, { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", position: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) return;
    onAdd(form);
    setForm({ name: "", email: "", position: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
