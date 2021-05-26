import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/icon-instagram.svg";

const PageFooter = () => {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='page-footer--top'>
          <h2>audiophile</h2>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/category-headphones'>Headphones</Link>
              </li>
              <li>
                <Link to='/category-speakers'>Speakers</Link>
              </li>
              <li>
                <Link to='/category-earphones'>Earphones</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='page-footer--bottom'>
          <div className='page-footer--bottom__text'>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>

          <nav>
            <ul>
              <li>
                <Link to='/#' title='Facebook'>
                  <FacebookIcon />
                  <span className='icon sr-only'>Facebook</span>
                </Link>
              </li>
              <li>
                <Link to='/#' title='Twitter'>
                  <TwitterIcon />
                  <span className='icon sr-only'>Twitter</span>
                </Link>
              </li>
              <li>
                <Link to='/#' title='Instagramcdcd'>
                  <InstagramIcon />
                  <span className='icon sr-only'>Instagram</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
