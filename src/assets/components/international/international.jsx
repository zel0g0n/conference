import React from 'react'
import Header from '../header/header'
import ConferenceList from '../conference-list/conference-list'
import { internationalConferenceData, navData } from '../../constants/constants'
const International = () => {
  return (
    <div>
      <Header data={navData[1]}></Header>
      <ConferenceList data={internationalConferenceData}></ConferenceList>
    </div>
  )
}

export default International