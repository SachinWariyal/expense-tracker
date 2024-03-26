import './App.css';
import Walletbalance from './components/walletbalance/walletbalance';
import Expenses from './components/expenses/expenses';
function App() {
  return (
    <div className="App">
      <h1 className='top-heading'>Expense Tracker</h1>
      <div className="top">
        <Walletbalance/>
        <Expenses/>
      </div>
    </div>
  );
}

export default App;
