import React from 'react'
import ConferenceList from '../conference-list/conference-list'
import { internationalConferenceData} from '../../constants/constants'
const International = () => {
  return (
    <div>
      <ConferenceList data={internationalConferenceData}></ConferenceList>
    </div>
  )
}

export default International