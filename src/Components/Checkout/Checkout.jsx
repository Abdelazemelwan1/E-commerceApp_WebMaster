import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import DeliveryForm from "./DeliveryForm";
import ShippingMethod from "./ShippingMethod";
import PaymentNotice from "./PaymentNotice";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../Context/CartContext";
import UseTitle from "../UseTitle/UseTitle";

function Checkout() {
  UseTitle('Checkout');
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { cart, clearCart } = useCart();

  const savedInfo = localStorage.getItem("savedUserInfo");
  const [formData, setFormData] = useState(
    savedInfo
      ? JSON.parse(savedInfo)
      : {
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          apartment: "",
          postalCode: "",
          city: "",
          subscribe: false,
          saveInfo: false,
        }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleConfirmOrder = () => {
    const { email, firstName, lastName, address, city } = formData;

    if (!email || !firstName || !lastName || !address || !city) {
      setError("Please fill out all required fields.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-1">
        <div className="lg:col-span-3 bg-white p-6 lg:border-r border-gray-300">
          <ContactForm formData={formData} handleChange={handleChange} />
          <DeliveryForm formData={formData} handleChange={handleChange} />
          <ShippingMethod />
          <PaymentNotice onConfirm={handleConfirmOrder} />
        </div>

        <div className="lg:col-span-2">
          <OrderSummary products={Object.values(cart)} />
        </div>
      </div>

      {error && (
        <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-4 rounded shadow-lg">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

export default Checkout;
