import React from 'react';
import Card from './Cards';
import Data from '../data/Data'

const CardContainer = () => {
  const card = Data.map(item => {
    return (
      <Card 
        img={item.img}
        reviewRating={item.stats.reviewRating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        description={item.description}
        price={item.price}
      />
    )
  })

  return (
    <section className='card--container'>
      {card}
    </section>
  )
}

export default CardContainer;