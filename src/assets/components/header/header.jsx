import { Link } from 'react-router-dom'
import { navData } from '../../constants/constants'
import './header.scss'
import { useState } from 'react'
const Header = () => {
  const [modalValue,setModalValue] = useState(false);
  const openModalMenu = () => {
    setModalValue(prev => !prev)
  }
  return (
    <div className='header'>
      <div className="header__item">
        <img src="/uni-logo.png" alt="university-logo" className="logo-u" />
        <nav onClick={openModalMenu} className={`${modalValue?'':'hide__modal-menu'}`} >
          <ul className='navbar'>
          {
            navData.map(item => (
              <Link className='navbar__item' key={item.id} to={item.link} >
                <p className="navbar__item">
                  {item.title}
                </p>
              </Link>
            ))
          }
          </ul>
        </nav>
        {
          modalValue?(
            <img src="/close.png" onClick={openModalMenu} alt="bars-btn" className="menu__open" />
          ):(
          <img src="/bars.png" onClick={openModalMenu} alt="bars-btn" className="menu__open" />
          )
        }
        <img src="/logo-conference.png" alt="conference-logo" className="logo-u" />
      </div>
    </div>
  )
}

export default Header