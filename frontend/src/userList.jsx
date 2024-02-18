// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from your server when the component mounts
    axios.get('http://localhost:5000/users') // Update the URL to match your server endpoint
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.names.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
