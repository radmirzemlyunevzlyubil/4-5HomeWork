import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toFixed(2)} рублей
            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
