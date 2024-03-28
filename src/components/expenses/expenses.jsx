import React from 'react'
import "./expenses.css"
const expenses = () => {
  return (
    <div className='expenses-box'>
        <h1 className='expenses-text'>Expenses: <span className='expense'>500</span></h1>
        <button className='expenses-button'>+ Add Expenses</button>
    </div>
  )
}

export default expenses