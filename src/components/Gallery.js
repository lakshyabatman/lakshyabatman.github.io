import React from 'react'
import './style/Gallery.css'
import SlackZomentumAkshay from '../components/images/slack_zomentum_akshay.png';
import SlackZomentumAnkit from '../components/images/slack_zomentum_ankit.png';

const Gallery = () => {
  return (
    <div className='gallery-wrapper'>
        <h1>Gallery</h1>
        <div>
            <h3>Notable Mentions</h3>
            <div className='imager_container'>
              <img src={SlackZomentumAkshay}/>
              <img src={SlackZomentumAnkit}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery