import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}
