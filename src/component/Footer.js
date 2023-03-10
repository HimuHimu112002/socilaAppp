import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
        <Row>
            <Col className='px-4 py-4 NavBgFooter'>
              <div>
                <Navbar variant="dark">
                <Navbar.Brand href="#home"><img className='logo' src='image/linkdin.jpg'></img></Navbar.Brand>
                </Navbar>
              </div>

              <div className='footerHeading m-3'>
                <h4>Navigation</h4>
                <ul>
                  <Link to="/"><li href="#home">Home</li></Link>
                  <Link to="/profile"><li href="#home">Profile</li></Link>
                  <li>Contact</li>
                </ul>
              </div>

              <div className='footerHeading mt-4'>
                <ul>
                  <li>Talent Solutions</li>
                  <li>Marketing Solutions</li>
                  <li>Sales Solutions</li>
                  <li>Safery Center</li>
                </ul>
              </div>

              <div className='footerHeading mt-4'>                
                <ul>
                  <li>Community Guidelines</li>
                  <li>Privacy & Terms</li>
                  <li>Mobile App</li>
                </ul>
              </div>

              <div className='footerHeading mt-4'>               
                <ul>
                  <li>Phone : +008574694 </li>
                  <li>Email : SocialApp@gmail.comn</li>
                  <li>Address : Dhaka Bangladesh</li>
                </ul>
              </div>

            </Col>
        </Row>
    </Container>
  )
}

export default Footer