import React from 'react';
import GroupedPhoto from '../images/GroupedPhoto.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero--img'>
        <img src={GroupedPhoto} alt='combined pictures for hero' />
      </div>
      <div className='hero--content'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts, all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero;