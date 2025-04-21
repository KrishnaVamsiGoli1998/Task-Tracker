// src/components/NotificationList.jsx
import React from 'react'

const NotificationList = ({ notifications, onMarkAsRead }) => {
  const styles = {
    list: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
    },
    card: {
      padding: '16px',
      backgroundColor: '#fff',
      border: '1px solid #e5e7eb',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s ease',
    },
    unreadCard: {
      backgroundColor: '#fef2f2', // light red background
      borderColor: '#f87171', // red border
    },
    message: {
      fontSize: '1rem',
      marginBottom: '10px',
      color: '#374151',
    },
    button: {
      padding: '8px 12px',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#3b82f6',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#2563eb',
    },
  }

  return (
    <div style={styles.list}>
      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        notifications.map((note) => (
          <div
            key={note.id}
            style={{
              ...styles.card,
              ...(note.is_read ? {} : styles.unreadCard),
            }}
          >
            <p style={styles.message}>{note.message}</p>
            {!note.is_read && (
              <button style={styles.button} onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)} onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)} onClick={() => onMarkAsRead(note.id)}>
                Mark as Read
              </button>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default NotificationList
