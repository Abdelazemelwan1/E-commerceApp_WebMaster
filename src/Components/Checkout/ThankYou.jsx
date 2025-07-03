import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <FaRegCircleCheck className="text-[#35AFA0] text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-[#35AFA0] mb-4">Thank you for your order!</h1>
      <p className="text-gray-700 text-center mb-6">We've received your order and will process it shortly.</p>
      <Link to="/" className="bg-[#35AFA0] text-white px-6 py-2 rounded hover:bg-[#35afa1e5]">
        Back to Home Page
      </Link>
    </div>
  );
}
