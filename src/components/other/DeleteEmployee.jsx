import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const DeleteEmployee = ({ employeeId }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedEmployees = userData.filter((emp) => emp.id !== employeeId);
      setUserData(updatedEmployees);
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
    >
      Delete
    </button>
  );
};

export default DeleteEmployee;
