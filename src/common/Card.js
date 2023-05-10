import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="Card">
        <img src={require('../assets/restauranfood.jpg')} />
        <div className="Card-Text">
            <h3>Greek Salad</h3>
            <p>Greek Salad is a traditional Middle Eastern favorite consisting of thinly sliced spiced lamb that has been marinated.</p>
            <Link to="/orders">Order a delivery.</Link>
        </div>
    </div>
  )
}

export default Card
