import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ConferenceTime from '../conference-time/conference-time'
import './current-conference.scss'
const CurrentConference = ({rData, iData}) => {
  const cID = useParams()
  let key = cID.cID
  const getData = () => {
    if(key[0]=='r') {
      return rData.filter(item => item.id == key[1])
    }else {
      return iData.filter(item => item.id == key[1])
    }
  }
  const data = getData()
  
  return (
    <div className='current__conference'>
      <div className="cc__heading">
        <div className="logo-c">Konferensiya logotipi</div>
        <h3 className="cc__heading-title">{data[0].title}</h3>

      </div>
      <div className="cc__container">
        <aside className="cc__container-aside">
          <div className="logo-u">Universitet logotipi</div>
          <ConferenceTime time={data[0].time}></ConferenceTime>
        </aside>
        <div className="cc__container-main no-scrollbar">
          <div className="actual main__item">
            {rData[0].cData.actual}
          </div>
          <div className="brief main__item">
            {rData[0].cData.brief}
          </div>
          <div className="subs main__item">
            {rData[0].cData.subsidiary}
          </div>
        </div>
        <aside className="cc__container-aside">
          <div className="partners">Hamkor tashkilotlar nomi va logotiplari</div>
          <Link to='/login' className="btn login">
            Ro'yxatdan o'tish
          </Link>
        </aside>
      </div>
    </div>
  )
}

export default CurrentConference