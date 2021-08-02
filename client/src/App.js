import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' exact component={Home} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
