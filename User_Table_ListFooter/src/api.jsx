// src/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (page = 1) => {
  return axios.get(`${API_URL}?_page=${page}&_limit=5`);
};

export const createUser = (user) => {
  return axios.post(API_URL, user);
};

export const updateUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
