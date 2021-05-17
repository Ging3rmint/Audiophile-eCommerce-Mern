import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../../assets/icons/icon-cart.svg";

import CartMenu from "../../molecules/CartMenu/CartMenu";

const Header = ({ location }) => {
  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false);

  const isProductPage = () => {
    if (location.pathname.includes("product")) {
      return true;
    }
    return false;
  };

  const cart = useSelector((state) => state.cart);
  const { success, cartItems } = cart;

  useEffect(() => {
    if (success) {
      // console.log(cartItems);
      // setCartMenuIsOpen(true);
    }
  }, [success]);

  const onRemoveItem = () => {
    console.log("dispatch action remove all item in cart");
  };

  const onCloseMenu = () => {
    setCartMenuIsOpen(false);
  };

  const onCartClickHandler = () => {
    if (cartMenuIsOpen) {
      setCartMenuIsOpen(false);
    } else {
      setCartMenuIsOpen(true);
    }
  };

  return (
    <header>
      <nav className={isProductPage() ? "page-nav bg-black" : "page-nav"}>
        <div className='container'>
          <h2>audiophile</h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Headphone</Link>
            </li>
            <li>
              <Link to='/'>Speakers</Link>
            </li>
            <li>
              <Link to='/'>Earphones</Link>
            </li>
          </ul>
          <button onClick={onCartClickHandler} className='page-nav--cartBtn'>
            <CartIcon />
            <span className='page-nav--cartCounter'>
              {cartItems.reduce(
                (accumulator, item) => accumulator + item.qty,
                0
              )}
            </span>
            <span className='sr-only'>Cart</span>
          </button>
          {cartMenuIsOpen && (
            <CartMenu
              cartItems={cartItems}
              onRemoveItem={onRemoveItem}
              onCloseMenu={onCloseMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
