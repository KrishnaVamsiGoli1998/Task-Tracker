import React, { useState, useEffect } from 'react'
import NotificationsOverlay from './NotificationsOverlay'
import axios from 'axios'

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:4002/notifications').then((res) => {
      const unread = res.data.filter((n) => !n.is_read).length
      setUnreadCount(unread)
    })
  }, [])

  return (
    <div style={styles.header}>
      <h1 style={styles.title}>TaskTracker</h1>
      <div style={{ position: 'relative' }}>
        <button onClick={() => setShowOverlay(!showOverlay)} style={styles.bellButton}>
          🔔
        </button>
        {unreadCount > 0 && <span style={styles.notificationBadge}>{unreadCount}</span>}
      </div>
      {showOverlay && (
        <NotificationsOverlay
          onClose={() => {
            setShowOverlay(false)
            window.location.reload()
          }}
        />
      )}
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1abc9c',
    color: '#fff',
    position: 'fixed',
    width: '-webkit-fill-available',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  bellButton: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  notificationBadge: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: '#f87171', // Red background
    color: 'white',
    fontSize: '0.9rem',
    padding: '4px 6px',
    borderRadius: '50%',
  },
}

export default Header
