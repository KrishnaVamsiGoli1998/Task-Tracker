import axios from 'axios';

const API_BASE = 'http://localhost:4001';

export const createTask = async (task) => {
 return axios.post(`${API_BASE}/tasks`, task);
};

export const getTasks = async () => {
 const res = await axios.get(`${API_BASE}/tasks`);
 return res.data;
};

export const updateTaskStatus = async (id, status) => {
 const res = await fetch(`${API_BASE}/tasks/${id}/status`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ status }),
 });

 if (!res.ok) {
  throw new Error('Failed to update task status');
 }

 return await res.json();
};
