import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext'; // Adjust path as needed
import { useDispatch } from 'react-redux';

const Card = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const addItemHandler=()=>{
    dispatch(addToCart);
  }

  if (!product) return null;

  const buttonBase =
    'text-white font-semibold py-2 px-4 rounded w-full flex items-center justify-center gap-2';

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product); // Optionally add to cart before navigating
    navigate(`/Payement/productdetails/${product.id}`);
  };

  return (
    <article className="card border p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
      <p><strong>Author:</strong> {product.author}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>In Stock:</strong> {product.stock}</p>

      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.title || 'Product image'}
          className="w-full h-48 object-cover my-2"
        />
      )}

      <Link to={`productdetails/${product.id}`}>
        <button className={`mt-4 bg-gray-700 hover:bg-gray-800 ${buttonBase}`}>
          Read More
        </button>
      </Link>
      
      <button
        onClick={handleAddToCart}
        className={`mt-2 bg-blue-600 hover:bg-blue-700 ${buttonBase}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to Cart
      </button>

      <button
        onClick={handleBuyNow}
        className={`mt-2 bg-red-600 hover:bg-red-700 ${buttonBase}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        Buy Now
      </button>
    </article>
  );
};

export default Card;
