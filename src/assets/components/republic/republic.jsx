import ConferenceList from '../conference-list/conference-list'
import { republicConferenceData} from '../../constants/constants'

const Republic = () => {
  return (
    <div>
      <ConferenceList data={republicConferenceData}></ConferenceList>
    </div>
  )
}

export default Republic