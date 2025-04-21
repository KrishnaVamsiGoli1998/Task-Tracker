import React from 'react'
import TaskAnalytics from '../components/TaskAnalytics'
import TasksPerAssigneeChart from '../components/TasksPerAssigneeChart'

const Analytics = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Task Status Analytics</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TaskAnalytics />
        <TasksPerAssigneeChart />
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    marginTop: '3rem',
  },
  heading: {
    marginBottom: '1rem',
  },
  card: {
    display: 'flex',
    gap: '2rem',
  },
  statBox: {
    background: '#f0f0f0',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '100px',
  },
}

export default Analytics
