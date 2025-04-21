import React, { useEffect, useState } from 'react'
import { fetchAuditLogs } from '../api/auditApi'

const AuditLogs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await fetchAuditLogs()
        setLogs(data)
      } catch (err) {
        console.error('Error loading audit logs:', err)
      } finally {
        setLoading(false)
      }
    }
    loadLogs()
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Audit Logs</h2>
      {loading ? (
        <p>Loading logs...</p>
      ) : (
        <ul style={styles.list}>
          {logs.map((log, index) => (
            <li key={index} style={styles.item}>
              <strong>{log.action_type}</strong> — {log.description}
              <div style={styles.timestamp}>{new Date(log.timestamp).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '8px',
    maxWidth: '700px',
    margin: '2rem auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2c3e50',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    padding: '1rem',
    borderBottom: '1px solid #eee',
    background: '#f9f9f9',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
  timestamp: {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '0.3rem',
  },
}

export default AuditLogs
