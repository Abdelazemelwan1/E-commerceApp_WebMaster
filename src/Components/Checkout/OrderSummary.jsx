import React from "react";

export default function OrderSummary({ products }) {
  return (
    <div className="bg-white p-6">
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center text-sm text-gray-600"
          >
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover border shadow rounded"
                />
                <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {product.quantity}
                </span>
              </div>
              <span className="text-left line-clamp-1">{product.title}</span>
            </div>
            <span>${product.price}</span>
          </div>
        ))}

        {/* Total Summary */}
        <div className="border-t border-gray-400 pt-4 text-sm space-y-1">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal ({products.length} items)</span>
            <span>
              $
              {products.reduce((sum, p) => sum + p.price * p.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2">
            <span>Total</span>
            <span>${products.reduce((sum, p) => sum + p.price * p.quantity, 0).toFixed(2)}</span>
          </div>
          <p className="text-xs text-left text-gray-400">Including taxes</p>
        </div>
      </div>
    </div>
  );
}
