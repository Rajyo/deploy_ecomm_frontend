import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Input } from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row style={{display:"flex", justifyContent:"space-between"}}>
          <Col lg='3' md='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact</h4>
              <ListGroup className='footer__contact' style={{marginTop:"2rem"}}>
                <ListGroupItem clasName='ps-0 border-0 d-flex align-items-center gap-2' style={{display:"flex"}}>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>221B, Baker Street, London</p>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0 d-flex align-items-center gap-2' style={{display:"flex"}}>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+91 9876543210</p>
                </ListGroupItem>

                <ListGroupItem clasName='ps-0 border-0' style={{display:"flex"}}>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>unicornstore@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>Unicorn Store</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
            Unicorn Store is an online boutique selling unique, quirky and magical products. From unicorn-themed accessories and decor to mystical gifts and collectibles, we strive to fill your world with rainbows, glitter and all things magical.
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Subscribe to our newsletter</h4>
              <h6 style={{color:"rgb(255, 255, 255, 0.735)", lineHeight: "1.5rem", marginTop:"1.5rem"}}>Monthly digest of what's new and exciting from us.</h6>

              <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" style={{marginTop:"1rem"}}/>
              <Button style={{marginTop:"1rem", backgroundColor:"#e67e22", width:"100%"}}>Subscribe</Button>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright @Unicorn Store {year}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
