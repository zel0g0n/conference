import React from 'react'
import { Link } from 'react-router-dom'
import ConferenceTime from '../conference-time/conference-time'
import './conference.scss'
const Conference = ({data}) => {
  const length = data.title.length
  const calcSize = (arg) => {
    if(arg < 80) {
      return '20px'
    }
    if(arg < 120) {
      return '16px'
    }
  }
  return (
    <Link to={data.link} className='conference'>
      <div className="index">{data.id}</div>
      <h2 style={{fontSize: calcSize(length)}} className="conference__title">{data.title}</h2>
      <ConferenceTime time={data.time}></ConferenceTime>
    </Link>
  )
}

export default Conference