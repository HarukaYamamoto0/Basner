import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import PreviewModal from './components/PreviewModal'

const App: React.FC = () => {
  const [activityName, setActivityName] = useState('')
  const [activityDescription, setActivityDescription] = useState('')
  const [activityType, setActivityType] = useState('game')
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <MainContent
        activityName={activityName}
        setActivityName={setActivityName}
        activityDescription={activityDescription}
        setActivityDescription={setActivityDescription}
        activityType={activityType}
        setActivityType={setActivityType}
        setIsPreviewOpen={setIsPreviewOpen}
      />
      {isPreviewOpen && (
        <PreviewModal
          activityName={activityName}
          activityDescription={activityDescription}
          closeModal={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  )
}

export default App
