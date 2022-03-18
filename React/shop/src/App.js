import logo from './logo.svg';
import './App.css';
import Data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron background">
        <h1 className="display-4">20% Season Off</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>

      <div className='container'>
        <div className='row'>
          {
            shoes.map(function(신발, i){
              return (
                <Products shoes={shoes[i]}></Products>
              )
            })
          }
          {/* <Products shoes={shoes[0]}></Products>
          <Products shoes={shoes[1]}></Products>
          <Products shoes={shoes[2]}></Products> */}

          {/* <div className='col-md-4'>
            <img src={shoes[0].img_url} width="100%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 정보</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 정보</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function Products(Props){
  return (
    <>
      <div className='col-md-4'>
        <img src={Props.shoes.img_url} width="100%" />
        <h4>{Props.shoes.title}</h4>
        <p>{Props.shoes.content}</p>
        <p>{Props.shoes.price}</p>
      </div>
    </>
  )
}

export default App;
