import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../assets/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products[id];

  const buttonBase = 'text-white px-4 py-2 rounded mr-4';

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={product.imageUrl} alt={product.title} className="w-64 h-80 object-cover mx-auto mb-6" />
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg mb-1"><strong>Author:</strong> {product.author}</p>
      <p className="text-lg mb-1"><strong>Category:</strong> {product.category}</p>
      <p className="text-lg mb-1"><strong>Price:</strong> ${product.price}</p>
      <p className="text-lg mb-1"><strong>Stock:</strong> {product.stock} copies available</p>
      <p className="text-lg mb-1"><strong>Description:</strong> {product.description}</p>
      
      <div className="mt-4">
        <Link to="/cart" className={`bg-blue-600 hover:bg-blue-700 ${buttonBase}`}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Add to Cart
        </Link>
        <Link to={`/payment/productdetails/${id}`} className={`bg-red-600 hover:bg-red-700 ${buttonBase}`}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
