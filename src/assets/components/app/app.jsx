import { Route, Routes } from 'react-router-dom'
import Republic from '../republic/republic'
import International from '../international/international'
import CurrentConference from '../current-conference/current-conference'
import Author from '../author/author'
import Header from '../header/header'
import Footer from '../footer/footer'
import { republicConferenceData, internationalConferenceData } from '../../constants/constants'
import Login from '../login/login'
import './app.scss'

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <div className="shape"></div>
      <Routes>
        <Route path='/' element={<Republic></Republic>}/>
        <Route path='/international' element={<International></International>}/>
        <Route path='conference/:cID'  element={<CurrentConference iData={internationalConferenceData} rData={republicConferenceData}></CurrentConference>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/toauthor' element={<Author/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
