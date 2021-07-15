import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container className='py-2'>
          <Navbar.Brand href='/'>Amazaddict</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/cart'>
                {' '}
                <i className='fas fa-shopping-cart' />
                Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user' />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
