import {Container, Nav, Navbar} from "react-bootstrap";

function App() {

  return (
      <>
        <Navbar className="bg-dark">
          <Container>
            <Nav className="justify-content-end">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container className="p-5 vh-100" style={{backgroundColor: '#3b4252'}}>

        </Container>
      </>
  )
}

export default App
