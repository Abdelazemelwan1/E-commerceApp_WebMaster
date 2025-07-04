import React from "react";

export default function DeliveryForm({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-xl text-left font-bold mt-6 mb-4">Delivery</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name (optional)"
          className="border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2"
        />
      </div>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2 mb-4"
      />
      <input
        type="text"
        name="apartment"
        value={formData.apartment}
        onChange={handleChange}
        placeholder="Apartment, suite, etc. (optional)"
        className="w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2 mb-4"
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal code"
          className="border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 rounded px-4 py-2"
        />
      </div>
      <label className="flex items-center text-sm mb-4">
        <input
          type="checkbox"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="mr-2"
        />
        Save this information for next time
      </label>
    </div>
  );
}
