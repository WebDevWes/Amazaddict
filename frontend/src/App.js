import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pageBody py-3">
        <Container>
          <h1>Welcome to Amazaddict</h1>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
