const BASE_URL = 'http://localhost:4003/analytics';

export const getTaskStatusCounts = async () => {
 try {
  const response = await fetch(`${BASE_URL}/task-status`);
  if (!response.ok) throw new Error('Failed to fetch analytics data');
  return await response.json();
 } catch (error) {
  console.error('Error fetching analytics data:', error);
  return [];
 }
};
export const fetchTasksPerAssignee = async () => {
 try {
  const response = await fetch(`${BASE_URL}/tasks-per-assignee`);
  if (!response.ok) throw new Error('Failed to fetch analytics data');
  return await response.json();
 } catch (error) {
  console.error('Error fetching analytics data:', error);
  return [];
 }
};
