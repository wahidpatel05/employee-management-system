import { useContext, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const AuthData = useContext(AuthContext)
  console.log()

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
    } else if (AuthData && AuthData.employees.find((e)=>e.email === email && e.password === password)) {
      setUser('employee')
    } else {
      alert('Invalid Credentials')
    }
  }

  

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App
