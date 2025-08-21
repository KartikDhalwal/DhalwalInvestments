"use client";
import { useState } from "react";

export default function CalculatorsPage() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(60);

  const emi =
    (amount * rate) / 1200 / (1 - Math.pow(1 + rate / 1200, -tenure));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          💰 EMI Calculator
        </h1>

        {/* Loan Amount */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="range"
            min="10000"
            max="10000000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full mt-3 accent-blue-600"
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full mt-3 accent-blue-600"
          />
        </div>

        {/* Tenure */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Tenure (Months)
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="range"
            min="6"
            max="360"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(+e.target.value)}
            className="w-full mt-3 accent-blue-600"
          />
        </div>

        {/* Result Box */}
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-600">Your Monthly EMI</p>
          <div className="mt-3 text-4xl font-extrabold text-blue-700 bg-blue-50 border-2 border-blue-200 rounded-xl py-4">
            ₹{emi.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
