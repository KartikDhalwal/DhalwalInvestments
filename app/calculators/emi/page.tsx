'use client';
import { useState } from 'react';

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(60);

  const emi = (amount * rate / 1200) / (1 - Math.pow(1 + rate / 1200, -tenure));

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">EMI Calculator</h2>
      <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="mb-3 w-full p-2 border rounded" placeholder="Loan Amount" />
      <input type="number" step="0.1" value={rate} onChange={e => setRate(+e.target.value)} className="mb-3 w-full p-2 border rounded" placeholder="Interest Rate (%)" />
      <input type="number" value={tenure} onChange={e => setTenure(+e.target.value)} className="mb-3 w-full p-2 border rounded" placeholder="Tenure (Months)" />
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-lg">Estimated EMI: ₹{emi.toFixed(2)}</p>
      </div>
    </div>
  );
}