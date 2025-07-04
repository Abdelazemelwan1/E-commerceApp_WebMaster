import React, { useEffect, useState } from 'react'

function FinalSection() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(data => { setproducts(data) })
      .catch(err => console.log(err))
  }, [])

  const mainImage = products[0]

  return (
    <div className='flex my-10 lg:flex-row'>

      <div className='w-full lg:w-[20%]'>
        {mainImage && (
          <img
            src={mainImage.image}
            alt={mainImage.title}
            className='w-full h-full object-cover border border-[#E4E5EE] max-h-[500px]'
          />
        )}
      </div>

      <div className='w-full lg:w-[70%] grid grid-cols-2 sm:grid-cols-3 '>
        {products.slice(1).map((pro, id) => (
          <div
            key={id}
            className='flex items-center gap-3 p-3 border border-[#E4E5EE] '
          >
            <img
              src={pro.image}
              alt={pro.title}
              className='object-contain w-20 h-25'
            />
            <p className='text-sm font-medium line-clamp-2'>{pro.title}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default FinalSection
