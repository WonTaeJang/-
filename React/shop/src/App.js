import logo from './logo.svg';
import './App.css';
import Data from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

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
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
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

      {/* 스위치는 중복을 허용하지 않는다. */}
      <Switch>
        <Route exact path='/'>
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
                shoes.map(function (신발, i) {
                  return (
                    // <Card shoes={shoes[i]}></Card>
                    <Card shoes={신발} i={i} key={i}></Card>
                  )
                })
              }
            </div>
          </div>
        </Route>
        <Route path='/detail/:id'>
          <Detail shoes={shoes}></Detail>
        </Route>

        <Route path="/:id">
          <div>
            아무거나 적어보자
          </div>
        </Route>
      </Switch>




    </div>
  );
}



function Card(Props) {
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
