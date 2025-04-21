import React, { useEffect, useState } from 'react'
import NotificationList from './NotificationList'
import axios from 'axios'

const NotificationsOverlay = ({ onClose }) => {
  const [notifications, setNotifications] = useState([])

  const fetchNotifications = async () => {
    const res = await axios.get('http://localhost:4002/notifications')
    setNotifications(res.data)
  }

  const markAsRead = async (id) => {
    await axios.put(`http://localhost:4002/notifications/${id}/read`)
    fetchNotifications()
  }

  useEffect(() => {
    fetchNotifications()
  }, [])
  return (
    <div style={styles.overlay}>
      <div style={styles.header}>
        <h3 style={styles.title}>🔔 Notifications</h3>
        <button onClick={onClose} style={styles.closeButton}>
          ✖
        </button>
      </div>
      <div style={styles.content}>
        <NotificationList notifications={notifications} onMarkAsRead={markAsRead} />
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '33%',
    height: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '-2px 0 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideIn 0.3s ease-in-out',
    borderLeft: '4px solid #1abc9c',
  },
  header: {
    padding: '1.2rem',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#2c3e50',
  },
  closeButton: {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '4px',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#fafafa',
  },
}

export default NotificationsOverlay
