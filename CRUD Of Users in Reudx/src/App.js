// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from './features/users/UsersSlice.jsx';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const handleAddUser = () => {
    const newUser = { name: 'New User', email: 'arifsalaar@gmail.com' };
    dispatch(addUser(newUser));
  };

  const handleUpdateUser = (user) => {
    const updatedUser = { ...user, name: 'Updated User' };
    dispatch(updateUser(updatedUser));
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  let content;

  if (userStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (userStatus === 'succeeded') {
    content = users.map((user) => (
      <div key={user.id}>
        <p>{user.name} - {user.email}</p>
        <button onClick={() => handleUpdateUser(user)}>Update</button>
        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
      </div>
    ));
  } else if (userStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Users</h1>
      <button onClick={handleAddUser} style={{padding:"8px", fontSize:"16px",borderRadius:"8px"}}>Add User</button>
      {content}
    </div>
  );
};

export default App;
