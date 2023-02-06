import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.dribbble.com/users/4835348/screenshots/15111342/media/cd99d56307d0d9f0659cf4db80b4fe5d.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user?.email : "guest"}</h3>
          {
            //if user is in then show his email address or show guest
          }
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          {/*basketitem*/}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
