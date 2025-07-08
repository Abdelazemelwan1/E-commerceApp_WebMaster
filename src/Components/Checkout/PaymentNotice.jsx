import React from "react";

export default function PaymentNotice({ onConfirm }) {

  return (
    <div>
      <h2 className="text-xl font-bold text-left mt-6 mb-2">Payment</h2>
      <p className="text-sm text-left text-gray-500 mb-2">
        All transactions are secure and encrypted.
      </p>
      <div className="border border-dashed border-gray-300 bg-gray-100 rounded pb-4 pt-6 text-center text-gray-400 text-sm mb-4 flex flex-col items-center">
      <i className="fa fa-credit-card text-5xl"></i><br />
        This store cannot accept payments right now.
      </div>

      <button
        className="bg-gray-50  w-full py-3 rounded hover:bg-gray-100"
        onClick={onConfirm}
      >
        Pay now
      </button>

      <div className=" py-2 mt-4 border-t border-gray-400">
        <a className="text-xs text-blue-500 text-left" href="#">Privacy policy</a>
         </div>
    </div>
  );
}
