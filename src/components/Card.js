import React from 'react';
import KatieZaferes from '../images/KatieZaferes.png'
import Star from '../images/Star.png'

const Card = (props) => {
  return (
    <section className='card--container'>
      <div className='card'>
        <img src={KatieZaferes} alt='Katie Zaferes Airbnb experience' />
        <div className='card--stats'>
          <img src={Star} alt='' />
          <span>5.0</span>
          <span className='grey'>(6) • </span>
          <span className='grey'>USA</span>
        </div>
        <p className='card--description'>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
      </div>
    </section>
  )
}

export default Card;