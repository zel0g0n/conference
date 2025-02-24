import React from 'react'
import './footer.scss'

const Footer = () => {
  const footerData = [
    {id: 1, title: 'Instagram', url: 'https://www.instagram.com/renessans.edu.uz/'},
    {id: 2, title: 'Telegram', url: 'https://t.me/renessansedu_uz'},
    {id: 3, title: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61557702814655'},
    {id: 4, title: 'YouTube', url: 'https://youtube.com/@renessansuniversity'},
  ]
  return (
    <div className='footer'>
      <div className="footer__item">
        <ul className="footer__item-links">
          <p className="about">Bizning ijtimoiy tarmoqlar</p>
          {footerData.map(item => (
            <li key={item.id}>
              <a href={item.url} className="footer__item-links--link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191732.39379088508!2d69.16014380307134!3d41.33455660716226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b393418b12f%3A0xeaab63621741a7d1!2sRENESSANS%20TA&#39;LIM%20UNIVERSITETI!5e0!3m2!1sru!2s!4v1740402928448!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <p className="tel">
            Phone:
            <a href="tel:978020180" className="tel"> +998555067007</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer