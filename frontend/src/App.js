import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pageBody py-3">
        <Container>
          <Home />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
