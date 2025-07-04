import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { useCart } from '../Context/CartContext';
import { toast } from 'react-toastify';

function Products({ title, category }) {
  const [products, setproducts] = useState([]);
  const [selectedProduct, setselectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [suggested, setSuggested] = useState([]);

  const { handleAdd } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setproducts(data.slice(0, 8)))
      .catch(err => console.log(err));
  }, [category]);

  const handleOpenModal = (product) => {
    setselectedProduct(product);
    setQuantity(1);

    const filtered = products.filter(p => p.id !== product.id);
    const randomSuggested = filtered.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSuggested(randomSuggested);
  };

  return (
    <div className='my-10'>
      <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-center">
        <div>
          <p className='text-3xl font-bold'>{title}</p>
          <p className='text-[#9B9BB4]'>Do not miss the current Product</p>
        </div>
        <button className='rounded-[30px] border border-[#D9D9E9] p-3 flex items-center gap-4'>
          View All <FaArrowRightLong />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleOpenModal(product)}
            className="flex flex-col border border-[#EDEEF5] p-6 bg-white rounded relative cursor-pointer"
          >
            <span className="absolute px-2 py-1 text-sm text-white bg-[#35AFA0] rounded-[4px] top-[18px] left-[18px]">
              -30%
            </span>
            <img src={product.image} alt={product.title} className="object-contain w-full h-48 mb-2" />
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">{product.title}</h3>
            <p className="text-sm font-medium text-[#00B853] mb-2">IN STOCK</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-400 line-through">${(product.price * 1.3).toFixed()}</p>
              <p className="font-bold text-green-600">${product.price}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAdd(product);
                toast.success("Added Successfully");
              }}
              className="bg-[#35AFA0] text-white py-2 mt-4 rounded-3xl w-full"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/30 backdrop-blur-sm">
        <div className="bg-white w-full max-w-[1200px] max-h-[90vh] overflow-y-auto p-8 rounded-lg shadow-lg relative flex flex-col">
            <button
              className="absolute text-3xl font-bold text-gray-600 top-4 right-6"
              onClick={() => setselectedProduct(null)}
            >
              ×
            </button>

            <div className='flex flex-col gap-10 lg:flex-row'>
              <div className="flex items-center justify-center w-full p-6 border lg:w-1/2">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-[400px] object-contain" />
              </div>

              <div className="flex flex-col justify-between w-full lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{selectedProduct.title}</h2>

                <div className="flex items-center gap-4 mb-6">
                  <p className="text-xl font-bold text-black line-through">${(selectedProduct.price * 1.3).toFixed()}</p>
                  <p className="text-2xl font-semibold text-black">${selectedProduct.price}</p>
                </div>

                <div className="flex items-center justify-between w-full gap-4 px-6 py-3 mb-4 bg-gray-100 rounded ">
                  <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="text-xl font-bold">-</button>
                  <span className="font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(prev => prev + 1)} className="text-xl font-bold">+</button>
                </div>

                <button
                  onClick={() => {
                    handleAdd(selectedProduct);
                    toast.success("Added Successfully");
                  }}
                  className="bg-[#35AFA0] text-white py-3 px-6 mb-4 w-full rounded"
                >
                  Add To Cart
                </button>

                <div className="flex gap-4 mb-6">
                  <button className="flex items-center justify-center w-full gap-3 px-4 py-2 border border-gray-300 rounded">
                    <CiHeart className='text-2xl' />
                    Wishlist
                  </button>
                  <button className="flex items-center justify-center w-full gap-3 px-4 py-2 border border-gray-300 rounded">
                    <FaShare className='text-2xl' />
                    Share
                  </button>
                </div>

                <div className="mb-6">
                  <p className='mb-4 font-bold'>Product Details:</p>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
              </div>
            </div>

            {/* Suggested Products */}
            <div className="mt-10">
              <h3 className="mb-4 text-xl font-semibold">You may also like</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {suggested.map(item => (
                  <div
                    onClick={() => setselectedProduct(item)}
                    key={item.id}
                    className="flex flex-col items-start p-4 border rounded cursor-pointer"
                  >
                    <img src={item.image} alt={item.title} className="object-contain h-32 mb-2" />
                    <p className="text-sm font-medium">{item.title}</p>
                    <div className='flex gap-2'>
                      <p className="text-gray-400 line-through">${(item.price * 1.3).toFixed()}</p>
                      <p className="font-bold text-green-600">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
