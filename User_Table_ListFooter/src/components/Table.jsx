// src/components/Table.js
import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api';
import ListFooter from './ListFooter';
import './table.css';

const Table = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancel = false;

    const loadUsers = async () => {
      setLoading(true);
      try {
        const response = await fetchUsers(page);
        if (!cancel) {
          setUsers(prevUsers => [...prevUsers, ...response.data]);
          setLoading(false);
        }
      } catch (error) {
        if (!cancel) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    loadUsers();

    return () => {
      cancel = true; // Cleanup function to cancel async API call
    };
  }, [page]);

  const handleCreate = async () => {
    const newUser = { name: 'New User', email: 'newuser@example.com' };
    try {
      const response = await createUser(newUser);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedUser = { name: 'Updated User', email: 'updateduser@example.com' };
    try {
      const response = await updateUser(id, updatedUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="table-container">
      <h1 style={{ fontSize:"30px", fontFamily:"arial"}}>User Table</h1>
      <button style={{padding:"10px",border:"none", borderRadius:"8px", fontSize:"16px", backgroundColor:"teal", color:"white"}} onClick={handleCreate}>Add User</button>
      <table>
        <thead>
          <tr style={{backgroundColor:"white", color:"teal",fontSize:"30px"}}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user.id)} style={{padding:"10px",border:"none", borderRadius:"8px", fontSize:"16px", backgroundColor:"teal", color:"white"}}>Update</button>
                <button onClick={() => handleDelete(user.id)} style={{padding:"10px",border:"none", borderRadius:"8px", fontSize:"16px", backgroundColor:"teal", color:"white"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ListFooter loading={loading} loadMore={loadMore} />
    </div>
  );
};

export default Table;
