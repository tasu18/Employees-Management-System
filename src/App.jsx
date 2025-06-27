
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmpDashboard from './components/Dashboard/EmpDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@hm.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: {} }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  if (!userData) {
    return <div>Loading Auth...</div>;
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmpDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;

