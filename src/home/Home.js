import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import WeeklySpecials from './WeeklySpecials'

const Home = () => {
  return (
    <div>
        <Hero />
        <WeeklySpecials />
    </div>
)}

export default Home
