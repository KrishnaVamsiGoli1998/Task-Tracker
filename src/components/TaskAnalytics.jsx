import React, { useEffect, useState } from 'react'
import { getTaskStatusCounts } from '../api/analyticsApi'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const TaskAnalytics = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchAnalytics = async () => {
      const result = await getTaskStatusCounts()
      setData(result)
    }

    fetchAnalytics()
  }, [])

  const chartData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        label: 'Tasks by Status',
        data: data.map((item) => item.count),
        backgroundColor: ['#3498db', '#f1c40f', '#2ecc71'],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Status Distribution',
      },
    },
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Analytics Dashboard</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

const styles = {
  container: {
    width: '50%',
    height: '350px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  },
}

export default TaskAnalytics
