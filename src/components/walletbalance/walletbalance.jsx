import React from 'react'
import "./walletbalance.css"
const walletbalance = () => {
  return (
    <div className='walletbalance'>
        <h1 className='walletbalance-text'>Wallet Balance: <span className='price'>4500</span></h1>
        <button className='walletbalance-button'>+ Add Income</button>
    </div>
  )
}

export default walletbalance