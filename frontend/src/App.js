import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Header />
      <div className="pageBody py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
