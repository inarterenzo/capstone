import React from 'react'
import Button from '../common/Button'

const Hero = () => {
  return (
    <div className="hero">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a family owned mediterrean restaurant, focused on traditional recipes served with a modern twist.</h3>
            <Button to="/booking" text="Book a Table." />
        </div>
        <div>
            <img src={require('../assets/restauranfood.jpg')} />
        </div>
    </div>
  )
}

export default Hero
