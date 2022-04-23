import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import './MainDash.css'

const MainDash = () => {
  return (
    <div className='MainDash'>
      <h1>Dashboard</h1>
      <Cards />
      <h2>Recent orders</h2>
      <Table />
    </div>
  )
}

export default MainDash
