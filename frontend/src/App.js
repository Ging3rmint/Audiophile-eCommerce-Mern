import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/styles/app.scss";

//components
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductListingScreen from "./screens/ProductListingScreen";
import ProductScreen from "./screens/ProductScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

//helper component
import ScrollToTop from "./assets/scripts/ScrollToTop";

function App() {
  const [view, setView] = useState("desktop");

  const breakpoints = {
    bpMobile: 375,
    bpTablet: 768,
    bpDesktop: 1280,
  };

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    const handleResize = () => {
      if (getWidth() < breakpoints.bpTablet) {
        setView("mobile");
      } else if (getWidth() < breakpoints.bpDesktop) {
        setView("tablet");
      } else {
        setView("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    window.dispatchEvent(new Event("resize"));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Router>
        <Header location={window.location.pathname} />
        <ScrollToTop />
        <main>
          <Route exact path='/' render={() => <HomeScreen view={view} />} />
          <Route
            path='/products/:category'
            render={(props) => <ProductListingScreen view={view} {...props} />}
          />
          <Route
            path='/product/:slug'
            render={(props) => <ProductScreen view={view} {...props} />}
          />
          <Route
            path='/checkout'
            render={(props) => <CheckoutScreen view={view} {...props} />}
          />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
