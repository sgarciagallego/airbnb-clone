import React from 'react';
import Card from './Cards';
import KatieZaferes from '../images/KatieZaferes.png';
import WeddingPhotography from '../images/WeddingPhotography.png'
import MountainBiking from '../images/MountainBiking.png';

const CardContainer = () => {
  return (
    <section className='card--container'>
      <Card 
        img={KatieZaferes}
        reviewRating={5.0}
        reviewCount={6}
        location='USA'
        description='Life lessons with Katie Zaferes'
        price={136}
      />
      <Card 
        img={WeddingPhotography}
        reviewRating={5.0}
        reviewCount={30}
        location='USA'
        description='Professional wedding day photography'
        price={125}
      />
      <Card 
        img={MountainBiking}
        reviewRating={4.8}
        reviewCount={2}
        location='USA'
        description='Group Mountain Biking tour'
        price={50}
      />
    </section>
  )
}

export default CardContainer;