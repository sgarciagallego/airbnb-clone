import React from 'react';
import Star from '../images/Star.png'

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className='card'>
    {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.item.img} alt='an airbnb experience' className='card--img' />
      <div role='doc-subtitle' className='card--review'>
        <span><img src={Star} alt='airbnb review rating' className='card--star'/> </span>
        <span>{props.item.stats.reviewRating} </span>
        <span class='grey'>({props.item.stats.reviewCount}) • </span>
        <span class='grey'>{props.item.location}</span>
      </div>
      <p className='card--description'>{props.item.description}</p>
      <p><span className='bold'>From ${props.item.price} </span>/ person</p>
    </div>
  )
}

export default Card;