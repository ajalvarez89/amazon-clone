import React from 'react'
import "./Product.css"
import { useStateValue } from "../../stateProvider"

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch] = useStateValue();

  console.log('this is the basket', basket)
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐️</span>
            ))}
        </div>
      </div>

      <img
        src={image}
        alt="product_imagen"
      />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product
