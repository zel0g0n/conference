import React from 'react'
import './conference-time.scss'
const ConferenceTime = ({time}) => {
  return (
    <div className="conference__time">
        <img src="/time-start.png" alt="calendar-logo" className="start__time-logo" />
        <div className="conference__time-item">
          <span className="conference__time-item--info">
            Sana:
          </span>
          <span className="conference__time-item--time">
            {time}
          </span>
        </div>
      </div>
  )
}

export default ConferenceTime