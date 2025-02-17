import React from 'react'
import Header from '../header/header'
import ConferenceList from '../conference-list/conference-list'
import { republicConferenceData, navData } from '../../constants/constants'

const Republic = () => {
  return (
    <div>
      <Header data={navData[0]}></Header>
      <ConferenceList data={republicConferenceData}></ConferenceList>
    </div>
  )
}

export default Republic