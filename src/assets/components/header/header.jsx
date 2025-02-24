import { Link } from 'react-router-dom'
import { navData } from '../../constants/constants'
import './header.scss'
const Header = () => {
 
  return (
    <div className='header'>
      <div className="header__item">
        <img src="/uni-logo.png" alt="university-logo" className="logo-u" />
        <nav >
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
        <img src="/logo-conference.png" alt="conference-logo" className="logo-u" />
      </div>
    </div>
  )
}

export default Header