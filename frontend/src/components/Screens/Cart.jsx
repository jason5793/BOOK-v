import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">
        This is the product you have added. Would you like to proceed or cancel?
      </h2>
      <p className=''>
      </p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          aria-label="Add Item"
        >
          <FaPlus />
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          aria-label="Delete Item"
        >
          <FaTrash />
        </button>
        <Link to='/Payement/productdetails/:id'>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Proceed to Checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;