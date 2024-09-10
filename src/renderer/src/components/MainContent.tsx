import React from 'react'

interface MainContentProps {
  activityName: string
  setActivityName: (name: string) => void
  activityDescription: string
  setActivityDescription: (description: string) => void
  activityType: string
  setActivityType: (type: string) => void
  setIsPreviewOpen: (open: boolean) => void
}

const MainContent: React.FC<MainContentProps> = ({
  activityName,
  setActivityName,
  activityDescription,
  setActivityDescription,
  activityType,
  setActivityType,
  setIsPreviewOpen
}) => {
  return (
    <div style={{ flexGrow: 1, padding: '30px', color: '#fff' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Create a Discord Activity</h1>
      <div className="form-group">
        <label htmlFor="activity-name">Activity Name</label>
        <input
          type="text"
          id="activity-name"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="activity-description">Activity Description</label>
        <textarea
          id="activity-description"
          rows={4}
          value={activityDescription}
          onChange={(e) => setActivityDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="activity-type">Activity Type</label>
        <select
          id="activity-type"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        >
          <option value="game">Game</option>
          <option value="challenge">Challenge</option>
          <option value="discussion">Discussion</option>
        </select>
      </div>
      <button style={buttonStyle} onClick={() => setIsPreviewOpen(true)}>
        Preview
      </button>
      <button style={buttonStyle}>Create Activity</button>
    </div>
  )
}

const buttonStyle = {
  backgroundColor: '#5865f2',
  padding: '10px 20px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  cursor: 'pointer',
  marginRight: '10px'
}

export default MainContent
