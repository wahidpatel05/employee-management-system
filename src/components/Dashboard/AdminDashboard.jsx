import React, { useState } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import CreateEmployee from "../other/CreateEmployee";
import EmployeeList from "../other/EmployeeList";

const AdminDashboard = (props) => {
  const [activeTab, setActiveTab] = useState(""); // '' | 'task' | 'employee' | 'manage'

  return (
    <div className="min-h-screen w-full p-8 text-white bg-[#0f172a]">
      {/* Header */}
      <Header changeUser={props.changeUser} />

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mb-8 mt-6">
        <button
          onClick={() => setActiveTab("employee")}
          className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-md ${
            activeTab === "employee"
              ? "bg-sky-500 hover:bg-sky-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          👤 Create Employee
        </button>

        <button
          onClick={() => setActiveTab("task")}
          className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-md ${
            activeTab === "task"
              ? "bg-emerald-500 hover:bg-emerald-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          📝 Create Task
        </button>

        <button
          onClick={() => setActiveTab("manage")}
          className={`px-6 py-2 rounded-lg transition-all duration-300 shadow-md ${
            activeTab === "manage"
              ? "bg-indigo-500 hover:bg-indigo-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          ⚙️ Manage Employees
        </button>
      </div>

      {/* Content Card */}
      <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
        {activeTab === "employee" && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-sky-400">
              👤 Add New Employee
            </h2>
            <CreateEmployee />
          </div>
        )}

        {activeTab === "task" && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">
              📝 Create a New Task
            </h2>
            <CreateTask />
          </div>
        )}

        {activeTab === "manage" && (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4 text-indigo-400">
              ⚙️ Manage Employees
            </h2>
            <EmployeeList />
          </div>
        )}
      </div>

      {/* Task List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">📋 All Tasks</h2>
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
