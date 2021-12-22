import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import AuthChecking from "./common/AuthChecking";
import Analytics from "./home/Analytics";
import ListData from "./home/ListData";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AuthChecking />
      <Container fluid className='mt-5'>
        <Row className='d-flex justify-content-center'>
          <Col className='showme justify-content-md-center' xs lg='2'>
            <h3>Create link</h3>
          </Col>
          <Col className='showme d-flex flex-row-reverse' xs lg='2'>
            <Button variant='primary' onClick={handleShow}>
              Add
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add URL</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Container className='mt-5 show_list_link mb-5'>
          <div className='showme show_list_link_info'>
            <ListData/>
          </div>
          <div className='showme'>
            <Analytics/>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Home;
