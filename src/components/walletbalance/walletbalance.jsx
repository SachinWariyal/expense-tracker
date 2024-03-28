import React, { useState } from 'react';
import "./walletbalance.css"
import IncomeModel from '../IncomeModel/IncomeModel';
const Walletbalance = ({balance,addIncome}) => {
  
  const [showIncomeModal, setShowIncomeModal] = useState(false);

  const handleToggleIncomeModal = () => {
    setShowIncomeModal(prevState => !prevState);
  };

  return (
    <div className='walletbalance'>
        <h1 className='walletbalance-text'>Wallet Balance: <span className='price'>{balance }</span></h1>
          
        <button className='walletbalance-button' onClick={handleToggleIncomeModal}>+ Add Income</button>
        {showIncomeModal && (
          <IncomeModel addIncome={addIncome} onClose={handleToggleIncomeModal} />
        )}
    </div>
  )
}

export default Walletbalance;