import React from 'react'
import Conference from '../conference/conference'
import { republicConferenceData } from '../../constants/constants'
import './conference-list.scss'
const ConferenceList = ({data}) => {
  return (
    <div className='conference__list'>
      {
        data.map(item => (
          <Conference data={item} key={item.id} ></Conference>
        ))
      }
    </div>
  )
}

export default ConferenceList