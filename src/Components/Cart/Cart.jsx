import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../Context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, handleAdd, handleRemove, clearCart } = useCart();

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h1>

      {Object.keys(cart).length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(cart).map(item => (
                <tr key={item.id} className="border-t text-sm">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2 flex items-center gap-2">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => handleRemove(item)}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-yellow-400 text-white px-2 rounded"
                      onClick={() => handleAdd(item)}
                    >+</button>
                  </td>
                  <td className="p-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              🗑️ Clear Cart
            </button>

            <div className="text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              ✅ Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
