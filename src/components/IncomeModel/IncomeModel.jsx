import React, { useState } from 'react';
import "./incomemodal.css";

const IncomeModal = ({ addIncome, onClose }) => {
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleIncomeChange = (event) => {
    setIncomeAmount(event.target.value);
  };

  const handleAddIncome = () => {
    if (!incomeAmount || isNaN(parseInt(incomeAmount))) {
      alert('Please enter a valid income amount!');
      return;
    }
    addIncome(parseInt(incomeAmount));
    onClose(); // Close the modal after adding income
  };

  const handleClose = (event) => {
    if (event.target.classList.contains('modal-background')) {
      onClose(); // Close the modal when clicking outside of it
    }
  };

  return (
    <div className="modal-background" onClick={handleClose}>
      <div className="modal-content">
        <h2>Add Income</h2>
        <input
          type="text"
          placeholder="Enter income amount"
          value={incomeAmount}
          onChange={handleIncomeChange}
        />
        <button onClick={handleAddIncome}>Add</button>
      </div>
    </div>
  );
};

export default IncomeModal;
