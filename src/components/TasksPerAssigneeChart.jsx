import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { fetchTasksPerAssignee } from '../api/analyticsApi'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const TasksPerAssigneeChart = () => {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTasksPerAssignee()

        const assignees = data.map((d) => d.assignee)
        const counts = data.map((d) => parseInt(d.count, 10))

        setChartData({
          labels: assignees,
          datasets: [
            {
              label: 'Tasks per Assignee',
              data: counts,
              backgroundColor: '#1abc9c',
            },
          ],
        })
      } catch (err) {
        console.error('Error loading chart data:', err)
      }
    }

    loadData()
  }, [])

  if (!chartData) {
    return <div style={{ padding: '2rem' }}>Loading chart...</div>
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Tasks per Assignee</h3>
      <Bar data={chartData} />
    </div>
  )
}

const styles = {
  container: {
    width: '50%',
    background: '#fff',
    height: '350px',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    margin: '2rem auto',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
}

export default TasksPerAssigneeChart
