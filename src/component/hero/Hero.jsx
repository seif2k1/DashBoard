import React from 'react'
import Card from './cards/Card'
import "./hero.css"
import Table from './tables/Table'
const Hero = () => {
  return (
    <div className="Maindash">
      <h1>Dashboard</h1>
      <Card />
      <Table />
    </div>
  )
}

export default Hero