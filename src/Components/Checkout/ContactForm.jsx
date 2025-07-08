import React from "react";
import { Link } from "react-router-dom";

export default function ContactForm({ formData, handleChange }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Contact</h2>
        <Link to="/Login" className="text-blue-500 text-sm hover:underline">Login</Link>
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email or mobile phone number"
        className="w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2"
      />
      <label className="flex items-center mt-2 text-sm">
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
          className="mr-2"
        />
        Email me with news and offers
      </label>
    </div>
  );
}
