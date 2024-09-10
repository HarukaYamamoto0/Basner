import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#2b2b3d', padding: '20px' }}>
      <h2 style={{ color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>
        Activity Creator
      </h2>
      <nav style={{ marginTop: '30px' }}>
        <a href="#" style={linkStyle}>
          Create Activity
        </a>
        <a href="#" style={linkStyle}>
          Settings
        </a>
        <a href="#" style={linkStyle}>
          History
        </a>
      </nav>
    </div>
  )
}

const linkStyle = {
  color: '#ccc',
  display: 'block',
  margin: '10px 0',
  fontSize: '18px',
  textDecoration: 'none',
  padding: '10px',
  borderRadius: '8px',
  transition: 'background 0.3s',
  background: 'none'
}

export default Sidebar
