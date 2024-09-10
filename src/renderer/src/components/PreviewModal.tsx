import React from 'react'

interface PreviewModalProps {
  activityName: string
  activityDescription: string
  closeModal: () => void
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  activityName,
  activityDescription,
  closeModal
}) => {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h2>Activity Preview</h2>
        <p>
          <strong>Name:</strong> {activityName}
        </p>
        <p>
          <strong>Description:</strong> {activityDescription}
        </p>
        <button style={buttonStyle} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}

const modalStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const modalContentStyle = {
  backgroundColor: '#2b2b3d',
  padding: '20px',
  borderRadius: '10px',
  width: '500px',
  textAlign: 'center' as const,
  color: '#fff'
}

const buttonStyle = {
  backgroundColor: '#5865f2',
  padding: '10px 20px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  cursor: 'pointer',
  marginTop: '20px'
}

export default PreviewModal
