import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../../constants/constants'
import './header.scss'
const Header = ({data}) => {
  const [navMenu, setNavMenu] = useState(false)

  const navMenuHandler = () => {
    setNavMenu(prev => !prev)
  }


  return (
    <div className='header'>
      <img src="iiva.png" alt="university-logo" className="logo-u" />
      <nav >
        <p onClick={navMenuHandler} className="navbar-current">{data.title}</p>
        <ul className={`${navMenu ? 'navbar' : 'navbar hidden'}`}>
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
      <div className="logo-c">Konfirensiya logotipi</div>
    </div>
  )
}

export default Header