import React, { useState } from 'react'
import { createTask } from '../api/taskApi'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', assignee: '', status: 'Pending' })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createTask(task)
      await axios.post('http://localhost:4002/notifications', {
        title: 'New Task Created.',
        message: `Task "${task.title}" assigned to ${task.assignee}`,
        user_name: 'Vamsi',
      })
      setTask({ title: '', assignee: '', status: 'Pending' })
      toast.success('Task created and notification sent!')
    } catch (err) {
      console.error('Error creating task:', err)
      alert('Failed to create task')
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Task</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Title:</label>
        <input type='text' name='title' value={task.title} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Assignee:</label>
        <input type='text' name='assignee' value={task.assignee} onChange={handleChange} style={styles.input} required />

        <label style={styles.label}>Status:</label>
        <select name='status' value={task.status} onChange={handleChange} style={styles.select}>
          <option value='Pending'>Pending</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
        </select>

        <button type='submit' style={styles.button}>
          Create Task
        </button>
      </form>
      <ToastContainer position='top-center' autoClose={3000} />
    </div>
  )
}

const styles = {
  container: {
    marginTop: '120px',
    maxWidth: '500px',
    background: '#f4f4f4',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.3rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#1abc9c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}

export default TaskForm
