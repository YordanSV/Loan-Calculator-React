import { useState } from "react"
import Header from "./components/loan_calculator/Header"

function App() {
  const [amount, setAmount] = useState(10000);
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
        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white
          text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 
          hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickDecrement}
        >-</button>

        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white
          text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 
          hover:ring-offset-2 hover:ring-lime-500"
          onClick={handleClickIncrement}
        >+</button>
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

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{amount}</p>
    </div>
  )
}

export default App
