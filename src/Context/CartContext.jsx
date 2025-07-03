import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedQuantities = localStorage.getItem("quantities");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedQuantities) setQuantities(JSON.parse(savedQuantities));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [cart, quantities]);

  const handleAdd = (product) => {
    const updatedQuantity = (quantities[product.id] || 0) + 1;
    const updatedQuantities = { ...quantities, [product.id]: updatedQuantity };

    const updatedCart = {
      ...cart,
      [product.id]: {
        ...product,
        quantity: (cart[product.id]?.quantity || 0) + 1,
      },
    };

    setQuantities(updatedQuantities);
    setCart(updatedCart);
  };

  const handleRemove = (product) => {
    if ((quantities[product.id] || 0) === 0) return;

    const updatedQuantities = { ...quantities, [product.id]: quantities[product.id] - 1 };
    const updatedCart = { ...cart };

    if (updatedCart[product.id].quantity === 1) {
      delete updatedCart[product.id];
    } else {
      updatedCart[product.id].quantity -= 1;
    }

    setQuantities(updatedQuantities);
    setCart(updatedCart);
  };
    const clearCart = () => {
    setCart({});
    setQuantities({});
    localStorage.removeItem("cart");
    localStorage.removeItem("quantities");
  };

  return (
    <CartContext.Provider
  value={{ cart, quantities, handleAdd, handleRemove, clearCart }}
>
  {children}
</CartContext.Provider>

  );
};

export const useCart = () => useContext(CartContext);
