'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Form submitted! (Connect this to EmailJS or backend)");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" className="input" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" className="input" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" className="input" placeholder="Your Message" rows={4} onChange={handleChange}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}
