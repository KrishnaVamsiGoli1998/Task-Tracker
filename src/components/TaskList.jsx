import React, { useEffect, useState } from 'react'
import { getTasks, updateTaskStatus } from '../api/taskApi'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const data = await getTasks()
      setTasks(data)
    } catch (err) {
      console.error('Error fetching tasks:', err)
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateTaskStatus(id, newStatus)
      fetchTasks()
    } catch (err) {
      console.error('Error updating task status:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Tasks</h2>
      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks found.</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.taskItem}>
              <div>
                <strong>{task.title}</strong> <br />
                <span style={styles.meta}>Assignee:</span> {task.assignee}
              </div>
              <div>
                <span style={{ ...styles.status, ...statusStyles[task.status] }}>{task.status}</span>
                {task.status !== 'Completed' && (
                  <button style={styles.button} onClick={() => handleStatusChange(task.id, 'Completed')}>
                    Mark as Completed
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    background: '#f9f9f9',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  meta: {
    fontSize: '0.85rem',
    color: '#555',
  },
  status: {
    fontWeight: 'bold',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    marginRight: '10px',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
  },
  button: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#e67e22',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8rem',
  },
}

const statusStyles = {
  Pending: { backgroundColor: '#f39c12', color: 'white' },
  'In Progress': { backgroundColor: '#3498db', color: 'white' },
  Completed: { backgroundColor: '#2ecc71', color: 'white' },
}

export default TaskList
