import './App.css';
import Walletbalance from './components/Walletbalance/Walletbalance';
import Expenses from './components/expenses/expenses';
import RecentTransactions from './components/RecentTransactions/recentTransactions';
import  TopExpenses  from './components/TopExpenses/topExpenses';
import { useState } from 'react';
function App() {
  const [walletBalance, setWalletBalance] =  useState(5000);


  const addIncome =(amount)=>{
    setWalletBalance(prevBalance => prevBalance + amount)
  }

  return (
    <div className="App">
      <h1 className='top-heading'>Expense Tracker</h1>
      <div className="top">
        <Walletbalance balance={walletBalance} addIncome={addIncome}/>
        <Expenses/>
        <div class="wagon">
          <div class="category food">
                  <span class="icon">1</span>
              </div>
              <div class="category entertainment">
                  <span class="icon">2</span>
              </div>
              <div class="category travel">
                  <span class="icon">3</span>
              </div>
          </div>
      </div>
      <div className="bottom">
        <div class="container">
          <RecentTransactions/>
          <TopExpenses/>
        </div>
      </div>
    </div>
  );
}

export default App;
