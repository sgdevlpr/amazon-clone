import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="chechout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
        />
        <div className="checkout__title">
          <h2> your shopping Basket </h2>
        </div>
        {/* <div>
          {basket?.length === 0 ? (
            <div>
              <h1> Your shopping basket is empty</h1>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping basket</h2>

              {basket.map((item) => {})}
            </div>
          )}
        </div> */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
