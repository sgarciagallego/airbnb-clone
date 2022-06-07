import React from 'react';
import Star from '../images/Star.png'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt='an airbnb experience' className='card--img' />
      <div role='doc-subtitle' className='card--review'>
        <span><img src={Star} alt='airbnb review rating' className='card--star'/> </span>
        <span>{props.reviewRating} </span>
        <span class='grey'>({props.reviewCount}) • </span>
        <span class='grey'>{props.location}</span>
      </div>
      <p className='card--description'>{props.description}</p>
      <p><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
}

export default Card;