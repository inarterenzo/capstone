import React from 'react'
import Button from '../common/Button'
import Card from '../common/Card'

const WeeklySpecials = () => {
  return (
    <div className="weekly-specials">
        <div className="weekly-specials-heading">
            <h2>Weekly Specials</h2>
            <Button to="/menu" text="View Full Menu" />
        </div>
        <div className="specials">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default WeeklySpecials
