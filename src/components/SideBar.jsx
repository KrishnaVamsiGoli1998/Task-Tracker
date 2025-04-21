import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div style={styles.sidebar}>
      <nav style={styles.nav}>
        <Link
          to='/'
          style={{
            ...styles.link,
            ...(location.pathname === '/' ? styles.active : {}),
          }}
        >
          Create Task
        </Link>
        <Link
          to='/tasks'
          style={{
            ...styles.link,
            ...(location.pathname === '/tasks' ? styles.active : {}),
          }}
        >
          View Tasks
        </Link>
        <Link
          to='/analytics'
          style={{
            ...styles.link,
            ...(location.pathname === '/analytics' ? styles.active : {}),
          }}
        >
          Analytics
        </Link>
        <Link
          to='/audit'
          style={{
            ...styles.link,
            ...(location.pathname === '/audit' ? styles.active : {}),
          }}
        >
          Audit History
        </Link>
      </nav>
    </div>
  )
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    padding: '1rem',
    color: '#ecf0f1',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '93px',
  },
  logo: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  link: {
    display: 'block',
    width: '-webkit-fill-available%',
    padding: '0.75rem 1rem',
    backgroundColor: '#34495e',
    color: '#ecf0f1',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  active: {
    backgroundColor: '#1abc9c',
  },
}

export default Sidebar
