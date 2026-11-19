import { useState } from 'react'
import notificationData from './notifications'
import './App.css'

function Notification(props) {
  return <li className="notification">{props.children}</li>
}

function App() {
  const [notifications, setNotifications] = useState(notificationData)

  function clearNotification(id) {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <main className="app">
      <header className="notification-header">
        <div>
          <h1>Notifications</h1>
          <p>Total notifications: {notifications.length}</p>
        </div>
        {notifications.length > 0 ? (
          <button onClick={clearAllNotifications}>Clear all notifications</button>
        ) : null}
      </header>

      {notifications.length > 0 ? (
        <ul className="notification-list">
          {notifications.map(notification => (
            <Notification key={notification.id}>
              <p className="notification-id">ID: {notification.id}</p>
              <h2>{notification.name}</h2>
              <p className="notification-message">{notification.message}</p>
              <button onClick={() => clearNotification(notification.id)}>
                Clear notification
              </button>
            </Notification>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No notifications.</p>
      )}
    </main>
  )
}

export default App
