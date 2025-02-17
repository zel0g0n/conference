import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.scss'
const Login = () => {
  const navigate = useNavigate()

  const [userData,setUserData] = useState({})
  const [activeBtn, setActiveBtn] = useState([0,1])
  const formHandler = (e) => {
    e.preventDefault();
    let data = {}; // Har safar yangi obyekt yaratish
    const form = e.target; // Eng yaxshi usul
    const formData = new FormData(form);
  
    formData.forEach((value, key) => {
      if (value instanceof File) {
        data[key] = value.name; // Fayl bo‘lsa, nomini saqlash
      } else {
        data[key] = value;
      }
    });
  
    setUserData(prev => ({...prev, ...data}))
    form.reset()
    setTimeout(() => {
      navigate('/author')
    }, 1000);
  }
  const chooseOnline = () => {
    setActiveBtn([0,1])
  }
  const chooseOffline = () => {
    setActiveBtn([1,0])
  }
  return (
    <div className='login'>
      <div className="login__container">
        <h3 className="login__container-title">Konferensiyada ishtirok etish</h3>
        <div className="login__type-btns">
          <button onClick={chooseOffline} className={`type-btn ${activeBtn[0]?'active':''}`}>OFFLINE</button>
          <button onClick={chooseOnline} className={`type-btn ${activeBtn[1]?'active':''}`}>ONLINE</button>
        </div>
        <form  onSubmit={e => formHandler(e)} action="" className="login__form">
          <div className="login__form-title">Ro'yxatdan o'tish</div>
          <input required name='fish' type="text" className="form-inp" placeholder='F.I.SH'/>
          <input required name='number' type="number" className="form-inp" placeholder='Telefon raqamingiz'/>
          <input required name='msg' type="text" className="form-inp" placeholder='Nima uchun konferensiyada ishtirok etmoqchisiz?' />
          <input required name='mail' type="email" className="form-inp" placeholder='Elektron pochtangizni kiriting' />
          <select required name="conference" id="">
            <option value="conference">Konferensiyani tanlang</option>
            <option value="conference1">Konferensiya 1</option>
            <option value="conference2">Konferensiya 2</option>
            <option value="conference3">Konferensiya 3</option>
            <option value="conference4">Konferensiya 4</option>
          </select>
          <select required name="conferenceP" id="">
            <option value="conference">Konferensiya tadbirini tanlang</option>
            <option value="conference">Tadbir 1</option>
            <option value="conference">Tadbir 2</option>
            <option value="conference">Tadbir 3</option>
            <option value="conference">Tadbir 4</option>
          </select>
          <input required type="file" placeholder='Ilmiy maqolangizni yuklang' />
          <button type='submit' className="form-btn">Yuboring</button>
        </form>
      </div>
    </div>
  )
}

export default Login