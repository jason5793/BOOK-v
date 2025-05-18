import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/data';

const Payment = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <div className='flex-3/5 bg-red-600 text-white bg-center text-center'>Product not found</div>;

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Complete Your Purchase</h2>
      <img src={product.imageUrl} alt={product.title} className="w-40 h-56 mx-auto mb-4" />
      <h3 className="text-xl">{product.title}</h3>
      <p>Author: {product.author}</p>
      <p>Price: ${product.price}</p>

      <div className="mt-6">
        <label className="block mb-2 text-left">Payment Method:</label>
        <select className="border p-2 rounded w-full mb-4">
          <option className='text-black'>Credit Card</option>
          <option className='text-black'>UPI</option>
          <option className='text-black'>Cash on Delivery</option>
        </select>
        <button className="bg-green-600 text-white px-6 py-2 rounded">Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
