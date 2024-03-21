import { useState } from "react"
import Header from "./components/loan_calculator/Header"
import Button from "./components/loan_calculator/Button";
import { formatMoney, calculateTotalPay } from "./helpers";
function App() {
  const [amount, setAmount] = useState(10000);
  const [months, setMonths] = useState(6)
  const [total, setTotal] = useState(0)
  
  const min = 0;
  const max = 20000;
  const step = 100;

  function handleChange(e) {
    setAmount(+e.target.value)
  }

  function handleClickDecrement() {
    const value = amount - step;
    if (value < min) {
      alert('Invalid amount');
      return;
    }

    setAmount(value);
  }

  function handleClickIncrement() {
    const value = amount + step;
    if (value > max) {
      alert('Invalid amount');
      return;
    }

    setAmount(value);
  }
  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operator='-'
          function={handleClickDecrement}
        />
        <Button
          operator='+'
          function={handleClickIncrement}
        />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={amount}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(amount)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Choose a repayment <span className="text-indigo-600">term</span>
      </h2>

      <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center
      text-xl font-bold text-gray-500"
        value={6}
        onChange={e => setMonths(+e.target.value)}>
        <option value="6">6 months</option>
        <option value="12">12 months</option>
        <option value="24">24 months</option>
      </select>

      <div className="my-5 space-x-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          <span className="text-indigo-600">Payment</span> summary
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{months} Months</p>
        <p className="text-xl text-gray-500 text-center font-bold">Total to pay</p>
        <p className="text-xl text-gray-500 text-center font-bold">Monthly payments</p>
      </div>
    </div>
  )
}

export default App
