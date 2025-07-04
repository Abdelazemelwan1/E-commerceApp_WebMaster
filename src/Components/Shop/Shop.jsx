import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import image from "../../assets/images/aeb9763b1145b3dd6e2fadd6c2b27941d3d7b0fa.png";
import image2 from "../../assets/images/0575b3317d296c5fd9dc55d8a26d061ea81e512a.png";
import image3 from "../../assets/images/SVG.png";
import { FaStar } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext.jsx'; // Ensure path is correct

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [suggested, setSuggested] = useState([]);

  const { cart, quantities, handleAdd, handleRemove } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const productsWithDiscount = res.data.map(p => ({
          ...p,
          discount: `${Math.floor(Math.random() * 50) + 10}%`
        }));
        setProducts(productsWithDiscount);
      })
      .catch(err => console.error(err));
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    const filtered = products.filter(p => p.id !== product.id);
    const randomSuggested = filtered.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSuggested(randomSuggested);
  };

 return (
  <div className="min-h-screen bg-gray-50 p-4 flex flex-col lg:flex-row ">
    {/* Sidebar */}
    <div className="hidden lg:block w-64 bg-white rounded-xl shadow p-4 space-y-6 text-sm text-gray-700">
      {/* Categories */}
      <div>
        <h2 className="font-semibold mb-2">PRODUCT CATEGORIES</h2>
        <ul className="space-y-2">
          {["Beverages", "Biscuits & Snacks", "Breads & Bakery", "Breakfast & Dairy", "Frozen Foods", "Fruits & Vegetables", "Grocery & Staples", "Household Needs", "Meats & Seafood"].map((category, index) => (
            <li key={index} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded" />
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div>
        <h2 className="font-semibold mb-2">BRANDS</h2>
        <ul className="space-y-2">
          {[{ name: "Frito Lay", count: 8 }, { name: "Quaker", count: 36 }, { name: "Cola", count: 1 }, { name: "Welch's", count: 1 }, { name: "Oreo", count: 16 }].map((brand, index) => (
            <li key={index} className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                {brand.name}
              </label>
              <span className="text-gray-500 text-xs">({brand.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h2 className="font-semibold mb-2">PRICE</h2>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="0" className="w-16 border rounded p-1 text-center" />
          <span>-</span>
          <input type="number" placeholder="65.00" className="w-16 border rounded p-1 text-center" />
        </div>
      </div>

      {/* Availability */}
      <div>
        <h2 className="font-semibold mb-2">AVAILABILITY</h2>
        <ul className="space-y-2">
          {[{ label: "In stock", count: 62 }, { label: "Out of stock", count: 0 }].map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                {item.label}
              </label>
              <span className="text-gray-500 text-xs">({item.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Ad */}
      <div className="mt-4">
        <img src={image} alt="Ad" className="rounded-lg" />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col ">
      {/* Banner */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 rounded-lg overflow-hidden">
        <img src={image2} alt="Ad" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-black z-10 text-center px-2">
          <h2 className="text-xl font-bold">Organic Meals Prepared</h2>
          <h3 className="text-lg">Delivered to your Home</h3>
          <p className="text-sm">Fully prepared & delivered nationwide.</p>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="bg-white p-4 relative flex flex-col justify-between h-[460px] cursor-pointer"
            onClick={() => handleOpenModal(product)}
          >
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            <img src={product.image} alt={product.title} className="h-36 object-contain mx-auto mt-4" />
            <h3 className="text-sm font-medium mt-3 text-left">{product.title}</h3>
            <p className="text-green-600 text-xs font-semibold mt-1 text-left">IN STOCK</p>
            <div className="flex items-center mt-1 text-left">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
              <span className="text-gray-600 text-sm ml-2">1 review</span>
            </div>
            <div className="mt-1 text-left">
              <span className="line-through text-gray-400 text-sm mr-2">${(product.price * 1.3).toFixed(2)}</span>
              <span className="text-pink-600 font-bold text-lg">${product.price}</span>
            </div>
            <div className="mt-3 flex items-center justify-between w-full bg-gray-100 rounded-full overflow-hidden">
              <button onClick={(e) => { e.stopPropagation(); handleRemove(product); }} className="px-4 py-1 text-gray-700 font-semibold">-</button>
              <span className="px-4 py-1 text-gray-700 font-semibold">{quantities[product.id] || 0}</span>
              <button onClick={(e) => { e.stopPropagation(); handleAdd(product); }} className="bg-yellow-400 px-4 py-1 text-white font-semibold">+</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-[1200px] max-h-[90vh] overflow-y-auto p-8 rounded-lg shadow-lg relative flex flex-col">
            <button className="absolute text-3xl font-bold text-gray-600 top-4 right-6" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="flex flex-col gap-10 lg:flex-row">
              {/* Left side */}
              <div className="flex flex-col lg:flex-row  w-full lg:w-1/2">
                <div className="flex flex-col gap-2 w-20">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={selectedProduct.image} alt={`thumb${i}`} className="w-20 h-20 border rounded object-contain" />
                  ))}
                </div>
                <div className="flex items-center justify-center border flex-1 p-6">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="h-[400px] object-contain" />
                </div>
              </div>

              {/* Right side */}
         {/* Right side */}
<div className="flex flex-col gap-4 w-full lg:w-1/2">
  {/* اسم المنتج */}
  <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>

  {/* السعر كـ Range */}
  <p className="text-lg font-bold text-gray-900">
    ${Number(selectedProduct.price * 0.6).toFixed(2)} - ${Number(selectedProduct.price * 1.3).toFixed(2)}
  </p>

  {/* Available In */}
  <p className="text-sm text-gray-500">Available In:</p>
  <div className="flex gap-2">
    {["small", "medium", "large"].map((size) => (
      <button
        key={size}
        className="px-4 py-1 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition"
      >
        {size}
      </button>
    ))}
  </div>

  {/* التحكم في الكمية */}
  <div className="flex items-center gap-3 mt-2">
    <button
      onClick={() => handleRemove(selectedProduct)}
      className="w-10 h-10 border rounded text-xl font-bold hover:bg-gray-100"
    >
      -
    </button>
    <span className="text-xl">{quantities[selectedProduct.id] || 0}</span>
    <button
      onClick={() => handleAdd(selectedProduct)}
      className="w-10 h-10 border rounded text-xl font-bold hover:bg-gray-100"
    >
      +
    </button>
  </div>

  {/* زر Add to Cart */}
  <button
    onClick={() => handleAdd(selectedProduct)}
    className="bg-[#35AFA0] text-white py-3 w-full rounded-lg mt-4 flex items-center justify-center gap-2 text-sm font-semibold"
  >
    Add to Cart
  </button>

  {/* Wishlist + Share */}
  <div className="flex gap-2 mt-2">
    <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 text-sm">
      ♡ Wishlist
    </button>
    <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 text-sm">
      ↗ Share
    </button>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
    <span className="text-gray-500 font-semibold">Tags:</span>
    {["Fast Food", "Organic Corn", "Flavoured", "Dry Food"].map((tag) => (
      <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full">
        {tag}
      </span>
    ))}
  </div>

  {/* Product Details */}
  <div className="mt-4">
    <p className="font-semibold text-sm mb-1">Product Details:</p>
    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
      {selectedProduct.description}
    </p>
    <button className="text-blue-600 text-xs mt-1 hover:underline">
      Read More
    </button>
  </div>
</div>

            </div>

            {/* Related Products */}
            <div className="mt-10">
              <h3 className="mb-4 text-xl font-semibold">Related products</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                {suggested.map(item => (
                  <div onClick={() => handleOpenModal(item)} key={item.id} className="border p-3 rounded cursor-pointer hover:shadow-sm">
                    <img src={item.image} alt={item.title} className="h-28 object-contain mx-auto mb-2" />
                    <p className="text-sm font-semibold mb-1">{item.title}</p>
                    <div className="text-sm text-gray-500 line-through">${(item.price * 1.3).toFixed(2)}</div>
                    <div className="text-green-600 font-bold">${item.price}</div>
                    <p className="text-xs mt-1">1 each</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

};

export default App;
