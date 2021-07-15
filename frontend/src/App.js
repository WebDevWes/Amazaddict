import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome to Amazaddict</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}
