
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Function to increase quantity
  const incrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease quantity (removes if quantity becomes 0)
  const decrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ).filter(item => item.quantity > 0));
  };

  // Function to remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>${item.price}</strong></p>
              <p>Quantity: {item.quantity}</p>

              <button onClick={() => incrementQuantity(item.id)}>➕</button>
              <button onClick={() => decrementQuantity(item.id)}>➖</button>
              <button onClick={() => removeItem(item.id)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
