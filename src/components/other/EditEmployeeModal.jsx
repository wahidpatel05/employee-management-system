import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EditEmployeeModal = ({ employee, onClose }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [firstName, setFirstName] = useState(employee.firstName);
  const [email, setEmail] = useState(employee.email);
  const [password, setPassword] = useState(employee.password);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEmployees = userData.map((emp) =>
      emp.id === employee.id ? { ...emp, firstName, email, password } : emp
    );

    setUserData(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#1e293b] w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-sky-400 mb-4">✏️ Edit Employee</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
