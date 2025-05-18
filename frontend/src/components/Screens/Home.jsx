import React from 'react'
import Card from '../utility components/Card'
import { products } from '../../assets/data'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Book Store</h1>
      <div className="card-container">
        {Object.values(products).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home
