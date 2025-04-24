import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Men = () => {
  const { addToCart } = useContext(CartContext);

  const womenProducts = [
    { id: 1, title: "Women's Dress", price: 49.99, description: "Beautiful summer dress.", image: "/dress.jpg" },
    { id: 2, title: "Handbag", price: 29.99, description: "Elegant leather handbag.", image: "/handbag.jpg" }
  ];

  return (
    <div>
      <h1>Women's Collection</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {womenProducts.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
