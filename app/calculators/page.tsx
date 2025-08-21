'use client';
import { useState } from 'react';

export default function CalculatorsPage() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(60);

  const emi = (amount * rate / 1200) / (1 - Math.pow(1 + rate / 1200, -tenure));

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">EMI Calculator</h1>
      <input type="number" className="input" placeholder="Loan Amount" value={amount} onChange={e => setAmount(+e.target.value)} />
      <input type="number" className="input" placeholder="Interest Rate (%)" value={rate} onChange={e => setRate(+e.target.value)} />
      <input type="number" className="input" placeholder="Tenure (Months)" value={tenure} onChange={e => setTenure(+e.target.value)} />
      <p className="mt-4 text-lg">Your EMI is: <strong>₹{emi.toFixed(2)}</strong></p>
    </div>
  );
}
