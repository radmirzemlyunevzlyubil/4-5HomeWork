import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Store.css';
import Cart from './Cart';

function Store() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  const removeFromCart = (bookId) => {
    const updatedCart = cartItems.filter((item) => item.id !== bookId);
    setCartItems(updatedCart);
  };

  return (
    <div className="store">
      <h1>Наши товары</h1>
      <div className="product-list">
        {products.map((book) => (
          <div className="product-item" key={book.id}>
            <img className="book-image" src={book.image} alt={book.title} />
            <div className="book-details">
              <h2>{book.title}</h2>
              <p className="author">Автор: {book.author}</p>
              <p className="price">{book.price.toFixed(2)} рублей.</p>
              <button className="add-to-cart" onClick={() => addToCart(book)}>Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Store;
