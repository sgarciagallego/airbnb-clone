import React from 'react';
import Card from './Cards';
import Data from '../data/Data'

const CardContainer = () => {
  const card = Data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
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