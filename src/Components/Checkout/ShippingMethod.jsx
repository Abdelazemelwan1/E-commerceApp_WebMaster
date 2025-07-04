import React from "react";

export default function ShippingMethod() {
  return (
    <div>
      <h2 className="text-xl font-bold text-left mt-6 mb-2">Shipping method</h2>
      <div className="border border-gray-300 rounded px-4 py-2 bg-blue-50 outline-2 outline-blue-400 flex justify-between items-center mb-4">
        <span>Standard</span>
        <span className="font-semibold">FREE</span>
      </div>
    </div>
  );
}
