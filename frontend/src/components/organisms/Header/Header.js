import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../../assets/icons/icon-cart.svg";

//components
import CartMenu from "../../molecules/CartMenu/CartMenu";

//helper component
import UseScrollBlock from "../../../assets/scripts/useScrollBlock";

//action
import { CART_STATE_RESET } from "../../../redux/types/cartTypes";

const Header = ({ location, history }) => {
  const dispatch = useDispatch();

  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false);
  const [blockScroll, allowScroll] = UseScrollBlock();

  const isProductPage = () => {
    if (
      location.pathname.includes("product") ||
      location.pathname.includes("checkout")
    ) {
      return true;
    }
    return false;
  };

  const cart = useSelector((state) => state.cart);
  const { updateSuccess, cartItems } = cart;

  const onCartClickHandler = () => {
    if (cartItems.length > 0) {
      if (cartMenuIsOpen) {
        setCartMenuIsOpen(false);
        allowScroll();
      } else {
        setCartMenuIsOpen(true);
        blockScroll();
      }
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      setCartMenuIsOpen(true);
      blockScroll();
      dispatch({ type: CART_STATE_RESET });
    } else if (cartItems.length === 0) {
      setCartMenuIsOpen(false);
      allowScroll();
    }
  }, [updateSuccess, dispatch, allowScroll, blockScroll, cartItems]);

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
          <CartMenu
            history={history}
            cartItems={cartItems}
            onCloseMenuHandler={onCartClickHandler}
            isVisible={cartMenuIsOpen}
          />
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
