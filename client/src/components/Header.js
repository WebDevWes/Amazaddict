import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container className='py-2'>
          <LinkContainer to='/'>
            <Navbar.Brand>Amazaddict</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  {' '}
                  <i className='fas fa-shopping-cart nav-icon' />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user nav-icon' />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
