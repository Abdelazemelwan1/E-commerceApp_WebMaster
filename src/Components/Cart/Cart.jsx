
import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  // دالة لحساب الإجمالي
  const calculateTotal = (cartData) => {
    return Object.values(cartData).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  // تحميل بيانات السلة من localStorage عند أول تحميل للصفحة
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setTotal(calculateTotal(parsedCart));
    }
  }, []);

  // تعديل الكمية + تحديث localStorage مباشرة
  const handleQuantityChange = (id, delta) => {
    setCart(prev => {
      const updated = { ...prev };
      if (!updated[id]) return prev;

      updated[id].quantity += delta;
      if (updated[id].quantity <= 0) {
        delete updated[id];
      }

      // حفظ التعديلات في localStorage وتحديث المجموع
      const newTotal = calculateTotal(updated);
      setTotal(newTotal);
      localStorage.setItem("cart", JSON.stringify(updated));

      return updated;
    });
  };

  // تفريغ السلة بالكامل
  const clearCart = () => {
    setCart({});
    setTotal(0);
    localStorage.removeItem("cart");
  };

  // تنفيذ الطلب
  const handleCheckout = () => {
    alert("✅ Your order has been placed successfully!");
    clearCart();
  };

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
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-yellow-400 text-white px-2 rounded"
                      onClick={() => handleQuantityChange(item.id, +1)}
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
              onClick={handleCheckout}
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
