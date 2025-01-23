import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function MyNav() {
    return (
      <Navbar expand="lg" className="navbar-dark bg-dark MyNavbar fixed-top">
         <Navbar.Brand href="#home" className='ps-5'>EpicBook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
            <button type="button" class="btn btn-primary me-3">
            Cart <span class="badge badge-light">0</span>
            </button>
          </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar>
    );
  }
  
function MyFooter(){
return(
<Card>
      <Card.Header>BookStore</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          Per sognare non bisogna chiudere gli occhi, bisogna leggere
          </p>
          <footer className="blockquote-footer">
            cit <cite title="Source Title">Michel Foucault</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

);

}


const Welcome = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible className="text-center">
        <h1>Welcome to our WebSite</h1>
      </Alert>
    );
  }
  return <Button variant="dark" onClick={() => setShow(true)}>Show Alert</Button>;
}


  export {MyNav, MyFooter, Welcome};

