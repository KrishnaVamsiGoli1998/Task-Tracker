import axios from 'axios';

const API_URL = 'http://localhost:4004/logs';


export const fetchAuditLogs = async () => {
 try {
  const response = await axios.get(API_URL);
  if (response.status !== 200) throw new Error('Failed to fetch audit logs');
  return await response.data;
 } catch (error) {
  console.error('Error fetching audit data:', error);
  return [];
 }
};
