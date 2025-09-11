import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import EditEmployeeModal from "../other/EditEmployeeModal";
import DeleteEmployee from "../other/DeleteEmployee";

const EmployeeList = () => {
  const [userData] = useContext(AuthContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-sky-400 mb-6">
        👥 Employee Directory
      </h2>

      {userData.length === 0 ? (
        <p className="text-gray-400 text-center">No employees found.</p>
      ) : (
        <div className="space-y-4">
          {userData.map((emp) => (
            <div
              key={emp.id}
              className="flex justify-between items-center bg-[#1e293b] p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Employee Info */}
              <div>
                <h3 className="text-lg font-bold text-white">
                  {emp.firstName} {emp.lastName}
                </h3>
                <p className="text-gray-400 text-sm">{emp.email}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedEmployee(emp)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                >
                  ✏️ Edit
                </button>

                <DeleteEmployee employeeId={emp.id} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default EmployeeList;
